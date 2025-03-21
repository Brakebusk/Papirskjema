import { ReactNode } from 'react';

import style from './Button.module.scss';

const Button = ({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={style.button}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
