/*
  Used by the PDF generator auto pagination logic to determine groups of elements 
  that should be kept together on the same page if possible
*/

import { ReactNode } from 'react';

type PDFBlockProps = { children: ReactNode; tableOfContentsTitle?: string };

const PDFBlock = ({ children, tableOfContentsTitle }: PDFBlockProps) => {
  return (
    <div data-pdf-block data-pdf-toc-title={tableOfContentsTitle}>
      {children}
    </div>
  );
};
export default PDFBlock;
