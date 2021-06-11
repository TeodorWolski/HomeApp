import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import ForgotPasswordPage from 'views/ForgotPasswordPage';
import LoginPage from 'views/LoginPage';
import RegisterPage from 'views/RegisterPage';
import TasksPage from 'views/TasksPage';
import ShoppingPage from 'views/ShoppingPage';
import BudgetPage from 'views/BudgetPage';
import SettingsPage from 'views/SettingsPage';
import { routes } from 'routes';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.load} render={() => <Redirect to={routes.login} />} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.register} component={RegisterPage} />
        <Route exact path={routes.tasks} component={TasksPage} />
        <Route exact path={routes.budget} component={BudgetPage} />
        <Route exact path={routes.settings} component={SettingsPage} />
        <Route exact path={routes.shoppingList} component={ShoppingPage} />
        <Route path={routes.forgotPassword} component={ForgotPasswordPage} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
