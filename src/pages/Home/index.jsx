import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const Home = () => {

    const { user, logout } = useContext(AuthContext);

    return (
        <div className="home-page">
            <h1>Home page</h1>

            <p>Bem-vindo(a)</p>

            <p>Você está logado como <b>{user.email}</b></p>

            <p>Para deslogar clique no botão abaixo</p>

            <button onClick={() => logout()}>deslogar</button>
        </div>
    );
};

export default Home;
