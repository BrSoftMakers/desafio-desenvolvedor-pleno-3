import { Redirect, Route } from "react-router";
import { isAuth } from '../services/Auth';

type RouterType = {
    path: string;
    exact?: boolean;
    component: Function;
}

export function PrivateRoute({ component: Component, ...rest }: RouterType) {
    return (
        <Route
            {...rest}
            render={(props) => 
                isAuth() ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    )
}