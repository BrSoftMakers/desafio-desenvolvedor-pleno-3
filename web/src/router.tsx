import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Publications } from "./pages/Publications";
import { PublicationCreate } from "./pages/PublicationCreate";
import { PublicationsDetails } from "./pages/PublicationsDetails";
import { PublicationsUser } from "./pages/PublicationsUser";
import { PublicationsMaintenance } from "./pages/PublicationsMaintenance";

import { PrivateRoute } from './utils/PrivateRouter';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path='/publications/myPublications/maintenance' component={PublicationsMaintenance} />
                <PrivateRoute path='/publications/mypublications' component={PublicationsUser} />
                <PrivateRoute path='/publications/details' component={PublicationsDetails} />
                <PrivateRoute path='/publications/create' component={PublicationCreate} />
                <PrivateRoute path='/publications' component={Publications} exact />
                
                <Route path='/register' component={Register} />
                <Route path='/' component={Login} exact/>
            </Switch>
        </BrowserRouter>
    );
}

export { Router }