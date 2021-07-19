import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as SC from './styles';

import logo from '../../assets/logo.png';
import { api } from '../../services/api';

function Register() {

    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const data = { name, email, password }

        const userData = await api.post('/register', data);

        console.log(userData)
        return history.push('/');
    }

    return (
        <SC.RegiterPage>
            <img className="computerMan" src={logo} alt="Logo" />
            <div className="register-content">
                <h1>Cadastro</h1>
                    <form onSubmit={handleSubmit} >
                    <input
                        type="text"
                        placeholder="Nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <input
                        type="text"
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                        <button type="submit" >Cadastrar</button>
                    </form>
                    <div className="separator" >ou faça seu login</div>
                    <Link to="/" >Login</Link>
                </div>
        </SC.RegiterPage>
    );
}
export { Register }