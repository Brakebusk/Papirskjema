import { ReactNode, RefObject } from 'react';
import cn from 'clsx';
import { DateTime } from 'luxon';

import style from './template.module.scss';

import { PDF_PAGE_INNER_WIDTH } from './constants';

const DownloadTimestamp = () => (
  <>
    <b>Lastet ned</b>
    {`: ${DateTime.now().setLocale('nb').toLocaleString({
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })}`}
  </>
);

const SimpleFrontPage = ({ title }: { title: ReactNode | string }) => (
  <div className={style.simpleFrontPage}>
    <h1>{title}</h1>
    <div>
      <DownloadTimestamp />
    </div>
  </div>
);

export const Template = ({
  innerTemplate,
  title,
  onTemplateRendered,
  contentRef,
  className,
  debugMode,
}: {
  innerTemplate: (onRenderCallback: () => void) => ReactNode;
  title: ReactNode | string;
  onTemplateRendered: () => void;
  contentRef: RefObject<HTMLDivElement | null>;
  className: string | undefined;
  debugMode: boolean | undefined;
}) => {
  return (
    <div
      style={{
        width: PDF_PAGE_INNER_WIDTH,
      }}
      className={cn(style.template, debugMode && style.debug)}
      ref={contentRef}
    >
      <SimpleFrontPage title={title} />
      <div className={className}>
        {innerTemplate(() => onTemplateRendered())}
      </div>
    </div>
  );
};
