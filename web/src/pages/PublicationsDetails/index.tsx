import { useState } from 'react';
import { useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../services/api';
import * as SC from './styles';

type PublicationType = {
    id: string;
    title: string;
    content: string;
    user_id: string;
}

function PublicationsDetails() {

    const publication_id = sessionStorage.getItem('publication_id');
    const token = sessionStorage.getItem('token');
    const [data, setData] = useState<PublicationType[]>([])

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        api.get(`posts/${publication_id}`, config).then(res => setData(res.data))
    }, [publication_id, token])

    return (
        <SC.Details>
            <header>
                <Sidebar />
            </header>
            {data.map(publication => {
                return(
                    <main>
                        <h1>{publication.title}</h1>
                        <p>{publication.content}</p>
                    </main>
                )
                
            })}
        </SC.Details>
    )
}

export { PublicationsDetails }