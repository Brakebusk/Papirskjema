/*
  Used by the PDF generator auto pagination logic to determine groups of elements 
  that should be kept together on the same page if possible
*/

import { ReactNode } from 'react';

type PDFBlockProps = { children: ReactNode };

const PDFBlock = ({ children }: PDFBlockProps) => {
  return <div data-pdf-block>{children}</div>;
};
export default PDFBlock;
