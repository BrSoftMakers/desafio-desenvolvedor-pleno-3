import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as SC from './styles';

import logo from '../../assets/logo.png';
import loginImg from '../../assets/img2.jpg';
import { api } from '../../services/api';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const userData = { email, password };

        const { data } = await api.post('login', userData);

        sessionStorage.setItem('token', data)

        return history.push('/posts')
    }

    return (
        <SC.LoginPage>
            <img className="computerMan" src={loginImg} alt="imgLogin" />
            <div className="login-content">
                <img src={logo} alt="Logo" />
                <form onSubmit={handleSubmit} >
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
                    <button type="submit" >Entrar</button>
                </form>
                <div className="separator" >ou faça seu cadastro</div>
                <Link to="/register" >Cadastrar</Link>
            </div>
        </SC.LoginPage>
    );
}

export { Login }