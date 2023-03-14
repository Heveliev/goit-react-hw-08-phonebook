import { lazy } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from '../components/AppBar/AppBar';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';



const Home = lazy(() => import('../pages/Home/Home'));
const LogIn = lazy(() => import('../pages/LogIn/LogIn'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'))
const App = () => {


  return (<ChakraProvider>
    <Routes>
      
      <Route path='/' element={<AppBar />}>

        <Route index element={<Home />} />

         <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<SignUp />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LogIn/>} />
          }
        />
                <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts/>} />
          }
        />
</Route>
    </Routes>
     </ChakraProvider>  
  )
}


export {App}