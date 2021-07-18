import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Login} exact/>
            </Switch>
        </BrowserRouter>
    );
}

export { Router }