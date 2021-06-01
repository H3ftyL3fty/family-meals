// Lib
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
// App
import { ProtectedRoute } from './components';
import {
  AuthPage,
  IngredientsPage,
  PlannerPage,
  RecipesPage,
} from './pages';

const App: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/planner">
          <PlannerPage />
        </ProtectedRoute>
        <ProtectedRoute path="/recipes">
          <RecipesPage />
        </ProtectedRoute>
        <ProtectedRoute path="/ingredients">
          <IngredientsPage />
        </ProtectedRoute>
        <Route path="*">
          {isAuthenticated
            ?
              <Redirect to="/planner" />
            :
              <AuthPage />
          }
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
