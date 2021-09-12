import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Dashboard from "pages/Dashboard";


const Routes = () => {
    return(
        <BrowserRouter >
            <Switch >
                <Route path="/" exact>
                    <Home></Home>
                </Route>

                <Route path="/dashboard">
                    <Dashboard></Dashboard>
                </Route>

            </Switch>
        </BrowserRouter>
    );

}

export default Routes;