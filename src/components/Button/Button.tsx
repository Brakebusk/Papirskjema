import { ReactNode } from 'react';
import cn from 'clsx';

import style from './button.module.scss';

import LoadingIcon from '../LoadingIcon';

const Button = ({
  onClick,
  disabled,
  busy,
  children,
  variant,
}: {
  onClick: () => void;
  disabled?: boolean;
  busy?: boolean;
  children: ReactNode;
  variant?: 'primary' | 'text';
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(style.button, variant === 'text' && style.text)}
      disabled={disabled}
    >
      {children}
      {busy && <LoadingIcon width={16} height={16} />}
    </button>
  );
};
export default Button;
