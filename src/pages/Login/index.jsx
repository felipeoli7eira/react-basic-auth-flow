import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';

const Login = () => {
    const { authenticated, login } = useContext(AuthContext);

    const [email, defineEmail] = useState('');
    const [password, definePassowrd] = useState('');

    const onFormSubmited = event => {
        event.preventDefault();
        login(email, password);
    };

    return (
        <div className="login-page">
            <h1>Login</h1>
            <form onSubmit={onFormSubmited}>
                <div className="field">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={e => defineEmail(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => definePassowrd(e.target.value)}
                    />
                </div>

                {authenticated && (
                    <p>
                        Você tem uma sessão ativa :) navegue para a{' '}
                        <Link to="/">home page</Link>
                    </p>
                )}

                {!authenticated && (
                    <div className="actions">
                        <button type="submit">Entrar</button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default Login;
