// Height and width in px, scales with A series paper
export const PDF_PAGE_WIDTH = 1130;
export const PDF_PAGE_HEIGHT = Math.SQRT2 * PDF_PAGE_WIDTH;

export const PDF_MARGINS = [60, 80, 80, 80];

export const PDF_PAGE_INNER_WIDTH =
  PDF_PAGE_WIDTH - PDF_MARGINS[1] - PDF_MARGINS[3];
export const PDF_PAGE_INNER_HEIGHT =
  PDF_PAGE_HEIGHT - PDF_MARGINS[0] - PDF_MARGINS[2];
