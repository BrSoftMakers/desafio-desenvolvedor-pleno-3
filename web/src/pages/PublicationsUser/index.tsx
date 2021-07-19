/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../services/api';
import * as SC from './styles';

type PublicationType = {
    id: string;
    title: string;
    content: string;
}

function PublicationsUser() {
    const history = useHistory();
    const token = sessionStorage.getItem('token');
    const user_id = sessionStorage.getItem('user_id');
    const [data, setData] = useState<PublicationType[]>([]);
    const [publication_id, setPublication_ID] = useState('');
    
    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        api.post('/posts/user', {user_id}, config).then(res => setData(res.data));
    }, [token, user_id])

    useEffect(() => {
        sessionStorage.setItem('publcation_id', publication_id);

        { publication_id !== '' && history.push('/publications/myPublications/maintenance') }
        
    }, [publication_id])

    return (
        <SC.PublicationUser>
            <header>
                <Sidebar />
            </header>
            <main>
                <h1>Minhas Publicações:</h1>
                <h2>Selecione a Publicação que deseja alterar.</h2>
                {data.map(Data => {
                    return (
                        <div className="publications-container" key={Data.id}>
                            <h2
                                onClick={() => {
                                    setPublication_ID(Data.id)
                                }}
                            >{Data.title}</h2>
                            <p>{Data.content}</p>
                            <hr />
                        </div>
                    );
                })}
            </main>
        </SC.PublicationUser>
    )
}

export { PublicationsUser }