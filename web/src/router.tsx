import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Publications } from "./pages/Publications";
import { PublicationCreate } from "./pages/PublicationCreate";
import { PublicationsDetails } from "./pages/PublicationsDetails";
import { PublicationsUser } from "./pages/PublicationsUser";
import { PublicationsMaintenance } from "./pages/PublicationsMaintenance";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/publications/myPublications/maintenance' component={PublicationsMaintenance} />
                <Route path='/publications/mypublications' component={PublicationsUser} />
                <Route path='/publications/details' component={PublicationsDetails} />
                <Route path='/publications/create' component={PublicationCreate} />
                <Route path='/publications' component={Publications} exact/>
                <Route path='/register' component={Register} />
                <Route path='/' component={Login} exact/>
            </Switch>
        </BrowserRouter>
    );
}

export { Router }