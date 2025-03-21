import { ChangeEventHandler, FocusEventHandler, useId } from 'react';

import style from './input.module.scss';

const Input = ({
  value,
  onBlur,
  onChange,
  label,
}: {
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  label: string;
}) => {
  const inputId = useId();
  return (
    <div className={style.inputContainer}>
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        className={style.input}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        id={inputId}
      />
    </div>
  );
};
export default Input;
