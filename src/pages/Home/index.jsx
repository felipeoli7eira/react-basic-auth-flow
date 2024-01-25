import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Button } from "primereact/button";

const Home = () => {

    const { user, logout } = useContext(AuthContext);

    return (
        <div className="home-page flex flex-column align-items-center justify-content-center p-4">
            <h1 className="text-xg font-light text-black-alpha-70">Home page</h1>

            <p className="m-0 text-base font-light">Bem-vindo(a)</p>
            <p className="my-2 text-base font-light">Você está logado como <b>{user.email}</b></p>
            <p className="m-0 mb-4 text-base font-light">Para deslogar clique no botão abaixo</p>

            <Button type="button" label="LogOut" icon="pi pi-sign-out" raised onClick={() => logout()} />
        </div>
    );
};

export default Home;
