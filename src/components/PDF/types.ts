import jsPDF from 'jspdf';

export type PDFOptions = {
  fileName?: string;
  contentClassName?: string;
  disableAutoPaging?: boolean;
  hidePageNumbers?: boolean;
  hideWatermark?: boolean;
  debugMode?: boolean;
  onPDFCreatedCallback?: (generatedPDF: jsPDF, fileName: string) => void;
};
