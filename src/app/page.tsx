'use client';

import Link from '@/components/Link/Link';
import style from './page.module.scss';

import cn from 'clsx';
import { useState } from 'react';
import { PageProvider, usePageContext } from './context';

const ApiUser = ({ disabled }: { disabled: boolean }) => {
  const { setStep } = usePageContext();

  return (
    <section className={cn(style.section, disabled && style.disabled)}>
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
      <p>Lim inn verdiene her:</p>
      <fieldset>
        <div>
          <label>
            <span>Client ID:</span>
            <input />
          </label>
        </div>
        <div>
          <label>
            <span>Client secret:</span>
            <input />
          </label>
        </div>
      </fieldset>
      <button
        onClick={() => {
          setStep(2);
        }}
      >
        OK
      </button>
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
  const [step, setStep] = useState(1);

  return (
    <PageProvider value={{ step, setStep }}>
      <div className={style.content}>
        <ApiUser disabled={step !== 1} />
        <ChooseForm disabled={step !== 2} />
        <DownloadForm disabled={step !== 3} />
      </div>
    </PageProvider>
  );
};

export default Page;
