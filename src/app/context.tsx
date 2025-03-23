import { createContext, ReactNode, useContext, useState } from 'react';

import useLocalStorage from '@/hooks/useLocalStorage';
import { MyForms } from '@/types/NettskjemaAPI';

type ContextProps = {
  step: number;
  setStep: (step: number) => void;
  clientId: string;
  setClientId: (clientId: string) => void;
  clientSecret: string;
  setClientSecret: (clientSecret: string) => void;
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
  selectedForm: MyForms | null;
  setSelectedForm: (form: MyForms) => void;
};

const PageContext = createContext<ContextProps>({} as ContextProps);

export const usePageContext = () => useContext(PageContext);

export const PageProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(1);
  const [clientId, setClientId] = useLocalStorage('clientId', '');
  const [clientSecret, setClientSecret] = useLocalStorage('clientSecret', '');
  const [accessToken, setAccessToken] = useState('');
  const [selectedForm, setSelectedForm] = useState<MyForms | null>(null);

  return (
    <PageContext.Provider
      value={{
        step,
        setStep,
        clientId,
        setClientId,
        clientSecret,
        setClientSecret,
        accessToken,
        setAccessToken,
        selectedForm,
        setSelectedForm,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
