import { createContext, ReactNode, useContext, useState } from 'react';

import { Element, FormSettings } from '@/types/NettskjemaAPI';

type ContextProps = {
  step: number;
  setStep: (step: number) => void;
  copyLink: string;
  setCopyLink: (link: string) => void;
  elements: Element[];
  setElements: (elements: Element[]) => void;
  settings: FormSettings;
  setSettings: (settings: FormSettings) => void;
};

const PageContext = createContext<ContextProps>({} as ContextProps);

export const usePageContext = () => useContext(PageContext);

export const PageProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(1);
  const [copyLink, setCopyLink] = useState('');
  const [elements, setElements] = useState<Element[]>([]);
  const [settings, setSettings] = useState<FormSettings>({});

  return (
    <PageContext.Provider
      value={{
        step,
        setStep,
        copyLink,
        setCopyLink,
        elements,
        setElements,
        settings,
        setSettings,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
