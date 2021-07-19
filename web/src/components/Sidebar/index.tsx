import * as SC from './styles';

import logoIMG from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <SC.Sidebar>
            <Link to="/publications"><img src={logoIMG} alt="logo" /></Link>
            <div className="Sidebar">
                <Link to="/publications/create">Criar publicação</Link>
                <Link to="/publications/myPublications">Minhas publicações</Link>
                <Link to="/" className="Exit" >Sair</Link>
            </div>
        </SC.Sidebar>
    )
}

export { Sidebar }