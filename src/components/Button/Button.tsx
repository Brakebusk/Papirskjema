import { ReactNode } from 'react';

import LoadingIcon from '../LoadingIcon';
import style from './Button.module.scss';

const Button = ({
  onClick,
  disabled,
  busy,
  children,
}: {
  onClick: () => void;
  disabled?: boolean;
  busy?: boolean;
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
      {busy && <LoadingIcon />}
    </button>
  );
};
export default Button;
