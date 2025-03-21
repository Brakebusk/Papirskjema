import { ReactNode } from 'react';

import style from './link.module.scss';

const Link = ({
  href,
  target,
  children,
}: {
  href: string;
  target?: HTMLAnchorElement['target'];
  children: ReactNode;
}) => (
  <a
    href={href}
    rel="noreferrer noopener"
    target={target}
    className={style.link}
  >
    {children}
  </a>
);
export default Link;
