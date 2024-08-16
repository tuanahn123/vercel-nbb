import React from 'react';
import { Navigate } from 'react-router-dom';
import path from '../../constants/path';
import { getProfileFromLS } from '../../utils/auth';

const PrivateRoute = ({ element: Component, roles }) => {
  const user = getProfileFromLS()

  if (!user) {
    return <Navigate to={path.login} replace />;
  }

  if (roles && !roles.includes(user.type)) {
    return <Navigate to={path.error} replace />;
  }
  
  return Component;
};

export default PrivateRoute;
