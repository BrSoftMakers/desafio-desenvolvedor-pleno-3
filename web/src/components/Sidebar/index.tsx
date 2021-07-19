import * as SC from './styles';

import logoIMG from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <SC.Sidebar>
            <Link to=""><img src={logoIMG} alt="logo" /></Link>
            <div className="Sidebar">
                <Link to="">Criar Postagem</Link>
                <Link to="">Minhas Postagens</Link>
                <Link to="">Alterar Poste</Link>
            </div>
        </SC.Sidebar>
    )
}

export { Sidebar }