import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login";
import { Posts } from "./pages/Posts";
import { Register } from "./pages/Register";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/posts' component={Posts} exact />
                <Route path='/register' component={Register} />
                <Route path='/' component={Login} exact/>
            </Switch>
        </BrowserRouter>
    );
}

export { Router }