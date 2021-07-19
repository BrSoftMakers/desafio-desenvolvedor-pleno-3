import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login";
import { PublicationCreate } from "./pages/PublicationCreate";
import { Publications } from "./pages/Publications";
import { Register } from "./pages/Register";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/publications/create' component={PublicationCreate} />
                <Route path='/publications' component={Publications} exact/>
                <Route path='/register' component={Register} />
                <Route path='/' component={Login} exact/>
            </Switch>
        </BrowserRouter>
    );
}

export { Router }