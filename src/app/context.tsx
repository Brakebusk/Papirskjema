import { createContext, ReactNode, useContext } from 'react';

type ContextProps = {
  step: number;
  setStep: (step: number) => void;
};

const PageContext = createContext<ContextProps>({} as ContextProps);

export const usePageContext = () => useContext(PageContext);

export const PageProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: ContextProps;
}) => <PageContext.Provider value={value}>{children}</PageContext.Provider>;
