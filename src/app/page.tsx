'use client';

import cn from 'clsx';
import { ReactNode, useCallback, useState } from 'react';

import getForm from '@/actions/getForm';
import Button from '@/components/Button';
import ErrorMessage from '@/components/ErrorMessage';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import Link from '@/components/Link';
import { useCreatePDF } from '@/components/PDF';
import FormTemplate, {
  renderableElements,
} from '@/components/PDF/templates/FormTemplate';
import pingInsight from '@/utils/insight';

import { PageProvider, usePageContext } from './context';
import style from './page.module.scss';

const Section = ({
  disabled,
  children,
}: {
  disabled: boolean;
  children: ReactNode;
}) => (
  <section
    className={cn(style.section, disabled && style.disabled)}
    inert={disabled}
  >
    {children}
  </section>
);

const Introduction = ({ disabled }: { disabled: boolean }) => (
  <Section disabled={disabled}>
    <h2>Steg 0: Vær en Nettskjema-bruker</h2>
    <p>
      Om du ikke bruker nettskjema.no til å lage spørreskjemaer, er ikke denne
      tjenesten for deg.
    </p>
  </Section>
);

const CopyPermissions = ({ disabled }: { disabled: boolean }) => {
  const { setStep, copyLink, setCopyLink, setElements, setSettings } =
    usePageContext();

  const [validationError, setValidationError] = useState('');
  const [busy, setBusy] = useState(false);

  const validateInput = useCallback(
    async (copyLink: string) => {
      setValidationError('');
      setBusy(true);

      const formId = parseInt(copyLink.match(/(\d+)/)?.[0] || '', 10);
      if (isNaN(formId)) {
        setValidationError('Ugyldig lenke');
        setBusy(false);
        pingInsight('validate_invalid');
        return;
      }

      const response = await getForm(formId);
      if (response?.elements && response?.settings) {
        setElements(response.elements);
        setSettings(response.settings);
        setStep(2);
        pingInsight('validate_valid');
      } else {
        setValidationError(response?.error || 'Ukjent årsak');
        pingInsight('validate_invalid');
      }
      setBusy(false);
    },
    [setStep, setElements, setSettings],
  );

  return (
    <Section disabled={disabled}>
      <h2>Steg 1: Gjør skjemaet ditt tilgjengelig for kopiering</h2>
      <Flex direction="column" rowGap={8}>
        <p>
          For å kunne opprette et papirskjema av nettskjemaet ditt, må du gjøre
          det tilgjengelig for kopiering.
        </p>
        <p>
          Gå til{' '}
          <Link href="https://nettskjema.no/user/form" target="_blank">
            Mine Skjema
          </Link>
          , finn skjemaet ditt, gå til{' '}
          <span className={style.emph}>Innstillinger</span> og huk av for at{' '}
          <span className={style.emph}>Alle med lenke</span> kan kopiere
          skjemaet ditt under{' '}
          <span className={style.emph}>Kopieringsrettigheter</span>. Husk å
          lagre innstillingen.
        </p>
        <Input
          label="Lim inn kopieringslenken her:"
          value={copyLink}
          onChange={(e) => setCopyLink(e.target.value.trim())}
        />
        <div>
          <Button
            onClick={() => validateInput(copyLink)}
            disabled={!copyLink}
            busy={busy}
          >
            Sjekk
          </Button>
          {validationError && (
            <ErrorMessage>Noe gikk galt: {validationError}</ErrorMessage>
          )}
        </div>
      </Flex>
    </Section>
  );
};

const DownloadForm = ({ disabled }: { disabled: boolean }) => {
  const { elements, settings, setStep, setElements, setSettings } =
    usePageContext();

  const [hasDownloaded, setHasDownloaded] = useState(false);

  const { createPDF, busy: pdfBusy } = useCreatePDF(
    (onRenderCallback) => (
      <FormTemplate
        settings={settings}
        elements={elements}
        onRenderCallback={onRenderCallback}
      />
    ),
    settings.title,
    {
      fileName: `papirskjema-${settings.formId}`,
    },
  );

  const unRenderableElements = [
    ...new Set(elements?.map((element) => element.elementType)),
  ].filter((type) => !renderableElements.includes(type));

  return (
    <Section disabled={disabled}>
      <h2>Steg 3: Last ned papirskjema</h2>
      <Flex direction="column" rowGap={16}>
        <p>Valgt skjema: {settings.title}</p>
        {unRenderableElements.length > 0 && (
          <div>
            <p>NB: Følgende elementtyper vil ikke bli inkludert: </p>
            {unRenderableElements.join(', ')}
          </div>
        )}
        <Flex columnGap={8}>
          <Button
            disabled={elements == null}
            onClick={() => {
              pingInsight('create_pdf');
              createPDF();
              setHasDownloaded(true);
            }}
            busy={pdfBusy}
          >
            Last ned PDF
          </Button>
          <Button
            onClick={() => {
              setStep(1);
              setSettings({});
              setElements([]);
              pingInsight('choose_another_form');
            }}
            disabled={pdfBusy}
            variant="text"
          >
            Velg et annet skjema
          </Button>
        </Flex>
        {hasDownloaded && !pdfBusy && (
          <div>
            <h3>Ferdig?</h3>
            <Flex direction="column" rowGap={8}>
              <p>
                Du kan nå huke fjerne kopieringsrettigheten du satt i steg 1 om
                du ønsker dette.
              </p>
            </Flex>
          </div>
        )}
      </Flex>
    </Section>
  );
};

const PageContent = () => {
  const { step } = usePageContext();
  return (
    <div className={style.content}>
      <Introduction disabled={step !== 1} />
      <CopyPermissions disabled={step !== 1} />
      <DownloadForm disabled={step !== 2} />
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
