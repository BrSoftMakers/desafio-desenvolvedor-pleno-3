import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Login} exact/>
                <Route path='/register' component={Register} />
            </Switch>
        </BrowserRouter>
    );
}

export { Router }