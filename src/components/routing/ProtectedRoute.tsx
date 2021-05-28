// Lib
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface ProtectedRouteProps {
  path: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = props => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Route exact path={props.path}>
      {props.children}
    </Route>
  );
};
