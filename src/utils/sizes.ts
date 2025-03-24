// Mirrors componentSize variable in variables.scss
export const componentSize = {
  XL: 1130,
  L: 939,
  M: 748,
  S: 557,
  XS: 366,
  XXS: 270.5,
  Mini: 175,
  Micro: 84,
};

export type ComponentSize = keyof typeof componentSize;

export const controlSize = {
  L: 44,
  M: 36,
  S: 24,
};

export type ControlSize = keyof typeof controlSize;
