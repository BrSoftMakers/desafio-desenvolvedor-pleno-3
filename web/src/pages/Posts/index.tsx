import * as SC from './styles';

import { Sidebar } from '../../components/Sidebar';

function Posts() {
    return (
        <SC.PostPage>
            <header>
                <Sidebar />
            </header>
            <main>
                <Posts />
            </main>
        </SC.PostPage>
    )
}

export { Posts }