import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { api } from '../../services/api';
import * as SC from './styles';

type Publications = {
    id: string;
    title: string;
    content: string;
    user_id: string;
    created_at: string;
    updated_at: string;
}

function PostsComponent() {
    const history = useHistory();
    const token = sessionStorage.getItem('token');

    const [Data, setData] = useState<Publications[]>([]);

    const [publication_id, setPublication_ID] = useState('')

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        api.get('posts', config).then(res => setData(res.data));

    }, [token])


    useEffect(() => {
        sessionStorage.setItem('publication_id', publication_id)
        
        // eslint-disable-next-line no-lone-blocks
        {publication_id !== '' && history.push('/publications/details')}
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [publication_id])

    return (
        <SC.Posts>
            <h1>Publicações:</h1>
            {Data.map((publications) => {
                return(
                    <div key={publications.id}>
                        <div className="post-content">
                            <h2
                                onClick={() => {
                                    setPublication_ID(publications.id)
                                 }}
                            >{publications.title}</h2>
                            <p>{publications.content}</p>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </SC.Posts>
    );
}

export { PostsComponent }