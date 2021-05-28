// Lib
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
// App
import { BaseLayout } from './components';
import {
  IngredientsPage,
  PlannerPage,
  RecipesPage,
} from './pages';

const App: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <BaseLayout>
        <Switch>
          <Route path="/planner">
            <PlannerPage />
          </Route>
          <Route path="/recipes">
            <RecipesPage />
          </Route>
          <Route path="/ingredients">
            <IngredientsPage />
          </Route>
          <Route path="*">
            <Redirect to="/planner" />
          </Route>
        </Switch>
      </BaseLayout>
    </Router>
  );
};

export default App;
