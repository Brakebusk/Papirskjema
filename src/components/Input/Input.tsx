import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  useId,
} from 'react';

import style from './input.module.scss';

const Input = ({
  value,
  onBlur,
  onChange,
  label,
  type,
}: {
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  label: string;
  type?: HTMLInputTypeAttribute;
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
        autoComplete="off"
        type={type}
      />
    </div>
  );
};
export default Input;
