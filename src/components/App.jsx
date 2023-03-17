import { lazy } from 'react';
import { ChakraProvider, Spinner, Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from '../components/AppBar/AppBar';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logInRefresh } from 'redux/auth/auth-thunk';
import { getIsRefreshing } from 'redux/auth/auth-selectors';



const Home = lazy(() => import('../pages/Home/Home'));
const LogIn = lazy(() => import('../pages/LogIn/LogIn'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'))
const App = () => {

  const dispatch = useDispatch();
  const isRefreshg = useSelector(getIsRefreshing)

  useEffect(() => {
    dispatch(logInRefresh())
  },[dispatch])


  return (<ChakraProvider>
    {isRefreshg ? <Box position="fixed"
      top="50%"
        left="50%"
        transform="translate(-50%,-50%)"><Spinner
    thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'/></Box> : (<Routes>
      
      <Route path='/' element={<AppBar />}>
        
        <Route index path='/' element={<RestrictedRoute restricted redirectTo="/contacts" component={<Home />} />} />

         <Route
          path="register"
          element={
            <RestrictedRoute restricted redirectTo="/contacts" component={<SignUp />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute restricted redirectTo="/contacts" component={<LogIn/>} />
          }
        />
                <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts/>} />
          }
        />
</Route>
    </Routes>)}
    
     </ChakraProvider>  
  )
}


export {App}