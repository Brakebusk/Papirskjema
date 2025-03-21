'use client';

import cn from 'clsx';
import { useEffect, useState } from 'react';

import getForms from '@/actions/getForms';
import getToken from '@/actions/getToken';
import Button from '@/components/Button';
import Fieldset from '@/components/Fieldset';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import Link from '@/components/Link';
import { MyForms } from '@/types/NettskjemaAPI';

import { PageProvider, usePageContext } from './context';
import style from './page.module.scss';

const ApiUser = ({ disabled }: { disabled: boolean }) => {
  const {
    setStep,
    clientId,
    setClientId,
    clientSecret,
    setClientSecret,
    setAccessToken,
  } = usePageContext();

  const [validationError, setValidationError] = useState(false);

  return (
    <section className={cn(style.section, disabled && style.disabled)}>
      <h2>Steg 1: API-Bruker</h2>
      <p>
        For å kunne opprette et papirskjema av skjemaet ditt, trenger du en
        API-bruker i Nettskjema med rettigheter til skjemaet ditt.
      </p>
      <Flex direction="column" rowGap={8}>
        <p>
          Gå til{' '}
          <Link href="https://authorization.nettskjema.no/" target="_blank">
            https://authorization.nettskjema.no/
          </Link>{' '}
          og registrer en klient.
        </p>
        <Fieldset
          legend="Lim inn verdiene her:"
          className={style.apiUserFieldset}
        >
          <Flex direction="column" rowGap={8}>
            <Input
              label="Client ID:"
              value={clientId}
              onChange={(e) => setClientId(e.target.value.trim())}
            />
            <Input
              label="Client secret:"
              value={clientSecret}
              onChange={(e) => setClientSecret(e.target.value.trim())}
            />
          </Flex>
        </Fieldset>
        <div>
          <Button
            onClick={async () => {
              setValidationError(false);
              const response = await getToken(clientId, clientSecret);
              if (response?.access_token) {
                setAccessToken(response.access_token);
                setStep(2);
              } else {
                setValidationError(true);
              }
            }}
            disabled={!clientId || !clientSecret}
          >
            Sjekk
          </Button>
          {validationError && <p className={style.error}>Feil</p>}
        </div>
      </Flex>
    </section>
  );
};

const ChooseForm = ({ disabled }: { disabled: boolean }) => {
  const { accessToken } = usePageContext();
  const [forms, setForms] = useState<MyForms>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!disabled) {
        const formList = await getForms(accessToken);
        console.log(formList);
        if (formList) {
          setForms(formList);
        } else {
          // Handle error
        }
      }
    };
    fetchData();
  }, [disabled, accessToken]);

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

const PageContent = () => {
  const { step } = usePageContext();
  return (
    <div className={style.content}>
      <ApiUser disabled={step !== 1} />
      <ChooseForm disabled={step !== 2} />
      <DownloadForm disabled={step !== 3} />
    </div>
  );
};

const Page = () => {
  return (
    <PageProvider>
      <PageContent />
    </PageProvider>
  );
};

export default Page;
