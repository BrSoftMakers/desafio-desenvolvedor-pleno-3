import { FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../services/api';
import * as SC from './styles';

type PublicationType = {
    id: string;
    title: string;
    content: string;
    user_id: string;
}

function PublicationsMaintenance() {

    const history = useHistory();
    const publication_id = sessionStorage.getItem('publication_id');
    const token = sessionStorage.getItem('token');

    const [data_db, setData_DB] = useState<PublicationType[]>([
        {
            id: '',
            title: '',
            content: '',
            user_id: ''
        }
    ]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        api.get(`posts/${publication_id}`, config).then(res => {setData_DB(res.data)})
    }, [publication_id, token])

    useEffect(() => {
        setTitle(data_db[0].title)
        setContent(data_db[0].content)
    }, [data_db])

    function handlSubmit(e: FormEvent) {
        e.preventDefault();

        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        const data = { title, content }

        api.put(`/posts/${publication_id}`, data, config);

        alert("Atualizado!")
        history.go(0);
    }

    function handleDelete() {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        api.delete(`posts/${publication_id}`, config)

        history.push('/publications/myPublications')
    }

    return (
        <SC.PublicationMaintenance>
            <header>
                <Sidebar />
            </header>
            <main>
                <div className="pm-content-exclude">
                    <h1>Deletar publicação</h1>
                    <button onClick={handleDelete} >Deletar</button>
                </div>
                <div className="pm-content-alteration">
                    <h1>Auteração:</h1>
                        <form onSubmit={handlSubmit}>
                            <h2>Título</h2>
                            <input
                                type="text"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                            <h2>Publicação</h2>
                            <textarea
                                id=""
                                cols={30}
                                rows={9}
                                onChange={(e) => setContent(e.target.value)}
                                value={content}
                            />
                            <button type="submit" >Atualizar</button>
                        </form>
                </div>
            </main>
        </SC.PublicationMaintenance>
    );
}

export { PublicationsMaintenance }