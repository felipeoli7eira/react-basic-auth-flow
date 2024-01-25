import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

import { AuthContext, AuthProvider } from './contexts/auth';
import { useContext } from 'react';

const AppRoutesMap = () => {
    const Protected = ({ children }) => {
        const { authenticated, loadingUserLogged } = useContext(AuthContext);

        if (loadingUserLogged) {
            return <p>carregando...</p>;
        }

        if (!authenticated) {
            return <Navigate to='login' />
        }

        return children;
    };

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route
                        exact
                        path=""
                        element={
                            <Protected>
                                <Home />
                            </Protected>
                        }
                    />
                    <Route path="login" element={<Login />} exact />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default AppRoutesMap;
