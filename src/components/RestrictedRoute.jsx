import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';


export const RestrictedRoute = ({ component: Component, restricted = false, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shuoldRedirect = isLoggedIn && restricted;
  return shuoldRedirect ? <Navigate to={redirectTo} /> : Component;
};