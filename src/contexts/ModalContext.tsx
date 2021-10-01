import React, { createContext, useCallback, useState } from 'react'
import Modal from '../components/Modal'
import IModalDataDTO from '../dtos/IModalDataDTO'

export interface IModalContextData {
  isVisible: boolean
  showModal(data: IModalDataDTO): void
  closeModal(): void
}

export const ModalContext = createContext<IModalContextData>(
  {} as IModalContextData
)

const ModalProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [modalData, setModalData] = useState<IModalDataDTO>()

  const handleShowModal = useCallback((data: any) => {
    setModalData(data)

    setIsVisible(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsVisible(false)
    setModalData(undefined)
  }, [])

  return (
    <ModalContext.Provider
      value={{
        isVisible,
        showModal: handleShowModal,
        closeModal: handleCloseModal
      }}
    >
      {children}
      {isVisible && !!modalData && (
        <Modal data={modalData.data} type={modalData.type} close={handleCloseModal} />
      )}
    </ModalContext.Provider>
  )
}

export default ModalProvider
