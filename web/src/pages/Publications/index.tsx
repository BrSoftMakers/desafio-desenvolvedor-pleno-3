import * as SC from './styles';

import { Sidebar } from '../../components/Sidebar';
import { PostsComponent } from '../../components/PublicationsComponent';

function Publications() {
    return (
        <SC.PostPage>
            <header>
                <Sidebar />
            </header>
            <main>
                <PostsComponent />
            </main>
        </SC.PostPage>
    )
}

export { Publications }