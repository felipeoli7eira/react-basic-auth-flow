import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import LoginPageIcon from './../../assets/svg/login-page-icon-asset.svg';
import './component.css';
import { InputText } from 'primereact/inputtext';
import { InputSwitch } from 'primereact/inputswitch';

const Login = () => {
    const { authenticated, login } = useContext(AuthContext);

    const [email, defineEmail] = useState('');
    const [password, definePassowrd] = useState('');
    const [remember, setRemember] = useState(false);

    const onFormSubmited = event => {
        event.preventDefault();
        login(email, password);
    };

    return (
        <div className="login-page-wrapper h-screen w-screen flex justify-content-center align-items-center">
            <div className="login-container flex">
                <div className="login-container-left login-description">
                    <h1>Bem-vindo(a)</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Similique non laboriosam assumenda dicta, at
                        sequi!
                    </p>
                    <img src={LoginPageIcon} alt="login" />
                </div>

                <div className="login-container-right w-full h-auto flex flex-column justify-content-center p-6">
                    <form
                        onSubmit={onFormSubmited}
                        className="flex flex-column gap-3"
                    >
                        <div className="flex flex-column gap-1">
                            <label htmlFor="email">E-mail</label>
                            <InputText
                                type="email"
                                id="email"
                                aria-describedby="email-help"
                                value={email}
                                onChange={e => defineEmail(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-column gap-1">
                            <label htmlFor="password">Senha</label>
                            <InputText
                                type="password"
                                id="password"
                                aria-describedby="password-help"
                                value={password}
                                onChange={e => definePassowrd(e.target.value)}
                            />
                        </div>

                        <div className="remember-button-container flex align-items-center gap-2">
                            <InputSwitch
                                checked={remember}
                                onChange={e => setRemember(e.value)}
                            />
                            <p className="text-sm font-normal text-center text-black-alpha-80">
                                Lembrar de mim
                            </p>
                        </div>

                        {authenticated && (
                            <p className="text-sm font-normal text-center text-black-alpha-80">
                                Você tem uma sessão ativa :) navegue para a{' '}
                                <Link to="/" className="link-go-to-home">
                                    home page
                                </Link>
                            </p>
                        )}

                        {!authenticated && (
                            <Button type="submit" label="ACESSAR" raised />
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
