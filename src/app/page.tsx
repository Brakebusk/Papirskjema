import Link from '@/components/Link/Link';
import style from './page.module.scss';

import cn from 'clsx';

const ApiUser = () => {
  return (
    <section className={style.section}>
      <h2>Steg 1: API-Bruker</h2>
      <p>
        For å kunne opprette et papirskjema av skjemaet ditt, trenger du en
        API-bruker i Nettskjema med rettigheter til skjemaet ditt.
      </p>
      <p>
        Gå til{' '}
        <Link href="https://authorization.nettskjema.no/" target="_blank">
          https://authorization.nettskjema.no/
        </Link>{' '}
        og registrer en klient.
      </p>
    </section>
  );
};

const ChooseForm = ({ disabled }: { disabled: boolean }) => {
  return (
    <section className={cn(style.section, disabled && style.disabled)}>
      <h2>Steg 2: Velg skjema</h2>
    </section>
  );
};

const DownloadForm = ({ disabled }: { disabled: boolean }) => {
  return (
    <section className={cn(style.section, disabled && style.disabled)}>
      <h2>Steg 3: Last ned papirskjema</h2>
    </section>
  );
};

const Page = () => {
  return (
    <div className={style.content}>
      <ApiUser />
      <ChooseForm disabled />
      <DownloadForm disabled />
    </div>
  );
};

export default Page;
