import { SVGProps } from 'react';

import Loading from '@/icons/loading.svg';

import style from './loadingIcon.module.scss';

const LoadingIcon = (props: SVGProps<SVGElement>) => (
  <Loading {...props} className={style.icon} />
);
export default LoadingIcon;
