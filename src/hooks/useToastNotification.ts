import { useContext } from 'react';
import { ToastNotificationContext, IToastNotificationContextData } from '../contexts/ToastNotification';

const useToastNotification = (): IToastNotificationContextData => {
    const context = useContext(ToastNotificationContext);

    if (!context) throw new Error('useToastNotification must be used with UseToastNotificationProvider ');

    return context;
};

export default useToastNotification;
