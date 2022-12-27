import { createContext, Dispatch, ReactNode, useContext, useState } from 'react'

const ModalContext = createContext({} as Props)

interface IChildren {
  children: ReactNode
}

interface Props {
  isOpen: boolean
  toggleIsOpen(): void
  closeModal(): void
}

export function ModalProvider({ children }: IChildren) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleIsOpen(): void {
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto'

    setIsOpen(prev => !prev)
  }

  function closeModal() {
    const wrapper = document.querySelector('.wrapper')!
    const modal = document.querySelector('.modal')!

    wrapper.classList.add('popout')
    modal.classList.add('popout')

    setTimeout(() => {
      wrapper.classList.remove('popout')
      modal.classList.remove('popout')

      toggleIsOpen()
    }, 700)
  }

  return (
    <ModalContext.Provider value={{ isOpen, toggleIsOpen, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  return useContext(ModalContext)
}
