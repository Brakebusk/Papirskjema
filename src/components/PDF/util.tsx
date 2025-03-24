import { Fragment, JSX } from 'react';

// Auto paging does not work optimally if you use flex gap for spcing between elements
export const addSpaceBetweenElements = (
  elements: JSX.Element[],
  spacing: number,
) =>
  elements.map((element, i) => (
    <Fragment key={i}>
      {i > 0 && <div style={{ height: spacing }} />}
      {element}
    </Fragment>
  ));
