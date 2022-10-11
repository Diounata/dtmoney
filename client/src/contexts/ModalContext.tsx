import { createContext, ReactNode, useContext, useState } from 'react';

const ModalContext = createContext({} as Props);

interface IChildren {
  children: ReactNode;
}

interface Props {
  isOpen: boolean;
  toggleIsOpen(): void;
}

export function ModalProvider({ children }: IChildren) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen(): void {
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';

    setIsOpen(prev => !prev);
  }

  return <ModalContext.Provider value={{ isOpen, toggleIsOpen }}>{children}</ModalContext.Provider>;
}

export function useModal() {
  return useContext(ModalContext);
}
