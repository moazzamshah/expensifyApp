import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/' component={ExpenseDashboardPage} exact />
          <Route path='/create' component={AddExpensePage} />
          <Route path='/edit/:id' component={EditExpensePage} />
          <Route path='/help' component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
