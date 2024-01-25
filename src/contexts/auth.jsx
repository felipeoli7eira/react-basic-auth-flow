import { createContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const appAuthTokenName = 'react_authflow_user';
    const toast = useRef(null);
    const showLoginInfo = () => {
        toast.current.show({
            severity: 'info',
            summary: 'Dados incorretos',
            detail: 'Use dev@react.com e 123',
        });
    };

    const [user, defineUser] = useState(null);
    const [loadingUserLogged, setLoadingUserLogged] = useState(true);

    useEffect(() => {
        const userSession = sessionStorage[appAuthTokenName];

        if (userSession === undefined) {
            setLoadingUserLogged(false);
            navigate('login', { replace: true });
        }

        try {
            const user = JSON.parse(userSession);
            setLoadingUserLogged(false);
            defineUser(user);
        } catch (error) {
            setLoadingUserLogged(false);
            navigate('login', { replace: true });
        } finally {
            // gerar um log ou algo do tipo...
        }
    }, []);

    const login = (email, password) => {
        if (email === 'dev@react.com' && password === '123') {
            const user = {
                id: new Date().getTime(),
                email,
            };

            sessionStorage[appAuthTokenName] = JSON.stringify(user, true);

            defineUser(user);

            navigate('');
            return;
        }

        showLoginInfo();
    };

    const logout = () => {
        sessionStorage.removeItem(appAuthTokenName);
        defineUser(null);
    };

    const contextData = {
        authenticated: Boolean(user),
        user,
        login,
        logout,
        loadingUserLogged
    };

    return (
        <AuthContext.Provider value={contextData}>
            <Toast ref={toast} />
            {children}
        </AuthContext.Provider>
    );
};
