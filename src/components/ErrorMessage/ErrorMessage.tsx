import { ReactNode } from 'react';

import style from './errorMessage.module.scss';

const ErrorMessage = ({ children }: { children: ReactNode }) => (
  <div className={style.error}>{children}</div>
);
export default ErrorMessage;
