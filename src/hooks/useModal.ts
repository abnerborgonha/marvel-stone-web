import { useContext } from 'react';
import { ModalContext, IModalContextData } from '../contexts/ModalContext';

const useModal = (): IModalContextData => {
    const context = useContext(ModalContext);

    if (!context) throw new Error('useModal must be used with UseModalProvider ');

    return context;
};

export default useModal;
