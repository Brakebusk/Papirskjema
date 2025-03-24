import { toJpeg } from 'html-to-image';
import { jsPDF } from 'jspdf';
import { ReactNode, useEffect, useRef, useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';

import { BESLEY_BOLD_BASE64, BESLEY_REGULAR_BASE64 } from './besley';
import { PDF_MARGINS, PDF_PAGE_HEIGHT, PDF_PAGE_WIDTH } from './constants';
import {
  applyAutoPaging,
  applyClickableLinks,
  applyPageNumbers,
  calculateTemplatePageCount,
} from './helpers';
import { Template } from './Template';
import { PDFOptions } from './types';

const getNewPDF = (numberOfPages: number) => {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: [PDF_PAGE_WIDTH, PDF_PAGE_HEIGHT],
    hotfixes: ['px_scaling'],
  });
  pdf.addFileToVFS('Besley-normal.ttf', BESLEY_REGULAR_BASE64);
  pdf.addFont('Besley-normal.ttf', 'Besley', 'normal');
  pdf.addFileToVFS('Besley-bold.ttf', BESLEY_BOLD_BASE64);
  pdf.addFont('Besley-bold.ttf', 'Besley', 'bold');

  // We need to preemptively add the number of extra pages we need for compatibility with Adobe Acrobat (the PDF already has 1 page by default)
  for (let i = 1; i < numberOfPages; i++) pdf.addPage();

  return pdf;
};

export const useCreatePDF = (
  innerTemplate: (onRenderCallback: () => void) => ReactNode,
  title: ReactNode | string,
  options: PDFOptions,
) => {
  const {
    fileName,
    contentClassName,
    onPDFCreatedCallback,
    disableAutoPaging,
    hidePageNumbers,
    debugMode,
  } = options;
  const [renderPDF, setRenderPDF] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [templateRendered, setTemplateRendered] = useState(false);

  const rootRef = useRef<ReactDOMClient.Root>(null);

  const createPDF = () => setRenderPDF(true);

  useEffect(() => {
    if (renderPDF) {
      const pdfRoot = document.getElementById('pdf-root');
      if (!pdfRoot) throw new Error('Could not find pdf-root element');
      if (debugMode) pdfRoot.style.zIndex = '10000';
      rootRef.current = ReactDOMClient.createRoot(pdfRoot);
      rootRef.current.render(
        <Template
          innerTemplate={innerTemplate}
          title={title}
          onTemplateRendered={() => setTemplateRendered(true)}
          contentRef={contentRef}
          className={contentClassName}
          debugMode={debugMode}
        />,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderPDF]);

  useEffect(() => {
    if (templateRendered) {
      const pdfRoot = document.getElementById('pdf-root');
      if (!pdfRoot) throw new Error('Could not find pdf-root element');

      // Filter out images that are not self hosted
      [...pdfRoot.querySelectorAll('img')]
        .filter(
          (image) =>
            !['data:', 'blob:'].some((prefix) => image.src.startsWith(prefix)),
        )
        .forEach((externalImage) => {
          externalImage.replaceWith(document.createElement('div'));
        });

      const convert = Array.from(pdfRoot.querySelectorAll('canvas, svg')).map(
        (element) => element.parentElement,
      );

      Promise.all(
        convert.map(async (element) => {
          if (!element) return;
          await toJpeg(element, {
            backgroundColor: '#ffffff',
            pixelRatio: 4,
          }).then((dataURL) => {
            const image = new Image(element.clientWidth, element.clientHeight);
            image.src = dataURL;
            element.replaceWith(image);
          });
        }),
      )
        .then(() => {
          if (!disableAutoPaging) applyAutoPaging(contentRef, debugMode);

          const numberOfPages = calculateTemplatePageCount(pdfRoot);

          getNewPDF(numberOfPages).html(pdfRoot, {
            callback: (generatedPDF) => {
              applyClickableLinks(generatedPDF, contentRef);

              if (!hidePageNumbers) {
                applyPageNumbers(generatedPDF, false);
              }

              const fullFileName = `${fileName || 'papirskjema'}.pdf`;
              onPDFCreatedCallback?.(generatedPDF, fullFileName);
              generatedPDF.save(fullFileName);
              if (!debugMode && rootRef.current) rootRef.current.unmount();
              setRenderPDF(false);
              setTemplateRendered(false);
            },
            margin: PDF_MARGINS,
          });
        })
        .catch(() => {
          if (!debugMode && rootRef.current) rootRef.current.unmount();
          setRenderPDF(false);
          setTemplateRendered(false);
        });
    }
  }, [
    debugMode,
    disableAutoPaging,
    fileName,
    hidePageNumbers,
    onPDFCreatedCallback,
    templateRendered,
  ]);

  return { createPDF, busy: renderPDF };
};
