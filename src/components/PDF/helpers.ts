import { jsPDF } from 'jspdf';
import { RefObject } from 'react';

import {
  PDF_MARGINS,
  PDF_PAGE_HEIGHT,
  PDF_PAGE_INNER_HEIGHT,
  PDF_PAGE_WIDTH,
} from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getOffsetTop = (element: any) => {
  let offsetTop = 0;
  while (element) {
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
};

export const getPageIndexFromOffset = (offset: number) =>
  Math.floor(offset / PDF_PAGE_INNER_HEIGHT);

type ElementOffset = {
  element: Element;
  offset: number;
};

const calculateOffsets = (
  elements: Element[],
  initalOffset: number,
): { newOffset: number; innerOffsets: ElementOffset[] } => {
  let addedOffsets: ElementOffset[] = elements.map((element) => ({
    element,
    offset: 0,
  }));

  const cumulativeOffset = elements.reduce(
    (cumulativeOffset, contentChild, i) => {
      const currentOffset = getOffsetTop(contentChild) + cumulativeOffset;

      const elementHeight = contentChild.clientHeight;

      const currentPage = getPageIndexFromOffset(currentOffset);
      const endPage = getPageIndexFromOffset(currentOffset + elementHeight);

      if (
        currentPage !== endPage ||
        contentChild.getAttribute('data-pdf-page-break')
      ) {
        if (elementHeight < PDF_PAGE_INNER_HEIGHT) {
          const distanceFromPageBottom =
            PDF_PAGE_INNER_HEIGHT -
            (currentOffset - PDF_PAGE_INNER_HEIGHT * currentPage) +
            1;

          addedOffsets[i].offset = distanceFromPageBottom;
          return cumulativeOffset + distanceFromPageBottom;
        } else {
          //element is taller than a single PDF page, calculate offsets for inner li-elements
          const listElements = Array.from(
            contentChild.getElementsByTagName('li'),
          );
          const tableRows = Array.from(contentChild.getElementsByTagName('tr'));

          if (!listElements.length && !tableRows.length)
            return cumulativeOffset;

          const { newOffset, innerOffsets } = calculateOffsets(
            listElements.length ? listElements : tableRows,
            cumulativeOffset,
          );
          addedOffsets = [...addedOffsets, ...innerOffsets];
          return newOffset;
        }
      }

      return cumulativeOffset;
    },
    initalOffset,
  );

  return {
    newOffset: cumulativeOffset,
    innerOffsets: addedOffsets.filter(({ offset }) => offset),
  };
};

export const calculateTemplatePageCount = (pdfRoot: HTMLElement) =>
  Math.ceil(pdfRoot.clientHeight / PDF_PAGE_INNER_HEIGHT);

export const applyAutoPaging = (
  contentRef: RefObject<HTMLDivElement | null>,
  debugMode: boolean | undefined,
) => {
  if (!contentRef.current) return;
  const contentChildren = Array.from(
    contentRef.current?.querySelectorAll(
      '[data-pdf-block], [data-pdf-page-break]',
    ),
  );
  const { innerOffsets: offsets } = calculateOffsets(contentChildren, 0);

  offsets.forEach(({ element, offset }) => {
    const shim = document.createElement('div');
    shim.style.height = `${offset}px`;
    if (debugMode) {
      shim.style.backgroundColor = 'red';
      if (offset > 20) shim.textContent = `Offset: ${offset}px`;
    }
    if (element.parentNode) element.parentNode.insertBefore(shim, element);
  });
};

export const applyPageNumbers = (
  generatedPdf: jsPDF,
  hideOnFrontPage: boolean,
) => {
  const pageCount = generatedPdf.getNumberOfPages();

  for (
    let pageNumber = hideOnFrontPage ? 2 : 1;
    pageNumber <= pageCount;
    pageNumber++
  ) {
    generatedPdf.setPage(pageNumber);
    const currentPage = generatedPdf.getCurrentPageInfo().pageNumber;
    generatedPdf.setFontSize(12);
    const rightPadding =
      ((String(currentPage) + String(pageCount)).length - 2) * 10;
    generatedPdf.text(
      `Side: ${currentPage}/${pageCount}`,
      PDF_PAGE_WIDTH - 120 - rightPadding,
      PDF_PAGE_HEIGHT - 40,
    );
  }
};

export const applyClickableLinks = (
  generatedPdf: jsPDF,
  contentRef: RefObject<HTMLElement | null>,
) => {
  if (!contentRef.current) return;
  const links: HTMLElement[] = Array.from(
    contentRef.current?.querySelectorAll('a'),
  );

  links.forEach((link) => {
    const y = getOffsetTop(link);

    const linkRects = [...link.getClientRects()];
    linkRects.forEach((rect) => {
      const yBaselineOffset = rect.y - linkRects[0].y;
      const rectY = y + yBaselineOffset;

      const pageNumber = Math.floor(rectY / PDF_PAGE_INNER_HEIGHT);

      const destination = link.dataset.pdfTocEntry
        ? {
            pageNumber: Number(link.dataset.pdfTocPage),
            top: Number(link.dataset.pdfTocOffset),
          }
        : {
            url: link.getAttribute('href'),
          };

      generatedPdf.setPage(pageNumber + 1);
      generatedPdf.link(
        rect.x + PDF_MARGINS[3],
        rectY + PDF_MARGINS[0] - pageNumber * PDF_PAGE_INNER_HEIGHT,
        rect.width,
        rect.height,
        destination,
      );
    });
  });
};
