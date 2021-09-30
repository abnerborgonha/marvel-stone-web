import { useContext } from 'react';
import { AuthContext, IAuthContextData } from '../contexts/AuthContext';

const useAuth = (): IAuthContextData => {
    const context = useContext(AuthContext);

    if (!context) throw new Error('useAuth must be used with UseAuthProvider ');

    return context;
};

export default useAuth;
