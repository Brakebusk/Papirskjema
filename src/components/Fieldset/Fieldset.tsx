import cn from 'clsx';
import { ReactNode } from 'react';

import style from './fieldset.module.scss';

const Fieldset = ({
  legend,
  className,
  children,
}: {
  legend: ReactNode;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <fieldset className={cn(style.fieldset, className)}>
      <legend>{legend}</legend>
      <div>{children}</div>
    </fieldset>
  );
};
export default Fieldset;
