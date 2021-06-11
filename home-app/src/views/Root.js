import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import ForgotPasswordPage from 'views/ForgotPasswordPage';
import LoginPage from 'views/LoginPage';
import RegisterPage from 'views/RegisterPage';
import TasksPage from 'views/TasksPage';
import { routes } from 'routes';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.load} render={() => <Redirect to={routes.login} />} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.register} component={RegisterPage} />
        <Route exact path={routes.tasks} component={TasksPage} />
        <Route exact path={routes.forgot} component={ForgotPasswordPage} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
