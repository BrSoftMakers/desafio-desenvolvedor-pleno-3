import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router';

import * as SC from './styles';

import { Sidebar } from '../../components/Sidebar';
import { api } from '../../services/api';

function PublicationCreate() {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    const user_id = sessionStorage.getItem('user_id');
    const token = sessionStorage.getItem('token')

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const data = { title, content, user_id };

        await api.post('posts', data, config)

        history.go(0)
    }

    return (
        <SC.Create>
            <header>
                <Sidebar />
            </header>
            <main>
                <h1>Crie sua Publicação:</h1>
                <form onSubmit={handleSubmit}>
                    <h2>Título:</h2>
                    <input
                        type="text"
                        placeholder="Título"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <h2>Publicação:</h2>
                    <textarea
                        cols={30}
                        rows={10}
                        placeholder="Publicação"
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                    />
                    <button type="submit" >Publicar</button>
                </form>
            </main>
        </SC.Create>
    );
}

export { PublicationCreate }