import { ReactNode, RefObject } from 'react';
import cn from 'clsx';
import { DateTime } from 'luxon';

import style from './template.module.scss';

import { PDF_PAGE_INNER_WIDTH } from './constants';
import { FormLanguageCode, translations } from './language';

const DownloadTimestamp = ({
  languageCode,
}: {
  languageCode: FormLanguageCode;
}) => (
  <>
    <b>{translations[languageCode].downloaded}</b>
    {`: ${DateTime.now()
      .setLocale(languageCode === 'en' ? 'en-UK' : languageCode)
      .toLocaleString({
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })}`}
  </>
);

const SimpleFrontPage = ({
  title,
  languageCode,
}: {
  title: ReactNode | string;
  languageCode: FormLanguageCode;
}) => (
  <div className={style.simpleFrontPage}>
    <h1>{title}</h1>
    <div>
      <DownloadTimestamp languageCode={languageCode} />
    </div>
  </div>
);

export const Template = ({
  innerTemplate,
  title,
  languageCode,
  onTemplateRendered,
  contentRef,
  className,
  debugMode,
}: {
  innerTemplate: (onRenderCallback: () => void) => ReactNode;
  title: ReactNode | string;
  languageCode: FormLanguageCode;
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
      <SimpleFrontPage title={title} languageCode={languageCode} />
      <div className={className}>
        {innerTemplate(() => onTemplateRendered())}
      </div>
    </div>
  );
};
