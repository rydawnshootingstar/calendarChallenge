import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';
import ErrPage from '../components/ErrPage';
import Header from '../components/Header';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
        <Header />
            <Switch>
                {/*Anything sent to private path will be conditionally rendered based on the presence of an auth token*/}
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <Route component={ErrPage}/>
            </Switch>
        </div>

    </Router>
);

export default AppRouter;