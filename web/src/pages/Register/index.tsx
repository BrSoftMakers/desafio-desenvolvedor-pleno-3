import { Link } from 'react-router-dom';
import * as SC from './styles';

import logo from '../../assets/imgs/logo.png';

function Register() {
    return (
        <SC.RegiterPage>
            <img className="computerMan" src={logo} alt="Logo" />
            <div className="register-content">
                <h1>Cadastro</h1>
                    <form>
                        <input type="text" placeholder="Nome" />
                        <input type="text" placeholder="E-mail" />
                        <input type="text" placeholder="Senha" />
                        <button>Cadastrar</button>
                    </form>
                    <div className="separator" >ou faça seu login</div>
                    <Link to="/" >Login</Link>
                </div>
        </SC.RegiterPage>
    );
}
export { Register }