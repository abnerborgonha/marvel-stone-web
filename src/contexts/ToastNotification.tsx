import { toast, ToastOptions, TypeOptions } from 'react-toastify'
import React, { createContext, useCallback, useState } from 'react'
import ToastNotification from '../components/ToastNotification'

interface IToastNotificationDataDTO {
  message: string
  type?: TypeOptions
}

export interface IToastNotificationContextData {
  showToastNotification(data: IToastNotificationDataDTO): void
}

export const ToastNotificationContext =
  createContext<IToastNotificationContextData>(
    {} as IToastNotificationContextData
  )

const ToastNotificationProvider: React.FC = ({ children }) => {
  const defaultOptions: ToastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type: 'default'
  }

  const handleShowToastNotification = useCallback(
    (data: IToastNotificationDataDTO) => {
      const type = data.type && data.type

      toast(data.message, { ...defaultOptions, type })
    },
    []
  )

  return (
    <ToastNotificationContext.Provider
      value={{
        showToastNotification: handleShowToastNotification
      }}
    >
      {children}
      <ToastNotification />
    </ToastNotificationContext.Provider>
  )
}

export default ToastNotificationProvider
