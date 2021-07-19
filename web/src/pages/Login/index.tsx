import { Link } from 'react-router-dom';
import * as SC from './styles';

import logo from '../../assets/imgs/logo.png';
import loginImg from '../../assets/imgs/img2.jpg';

function Login() {
    return (
        <SC.LoginPage>
            <img className="computerMan" src={loginImg} alt="imgLogin" />
            <div className="login-content">
                <img src={logo} alt="Logo" />
                <form>
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="Senha" />
                    <button>Entrar</button>
                </form>
                <div className="separator" >ou faça seu cadastro</div>
                <Link to="/register" >Cadastrar</Link>
            </div>
        </SC.LoginPage>
    );
}

export { Login }