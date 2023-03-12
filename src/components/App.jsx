// import { Section } from './Section/Section';
// import {InputForm} from './InputForm/InputForm';
// import {ContactList} from './ContactList/ContactList';
// import { useDispatch, useSelector } from 'react-redux';
// import {SearchContact} from './SearchContact/SearchContact';
// import { useEffect } from 'react';
// import { fetchAllContacts } from 'redux/contactsSlice/thunk';
// import { contactsSelect,loadingSelect } from 'redux/select/select';

import { lazy } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from '../components/AppBar/AppBar';
// import { Home } from '../pages/Home/Home';
// import { LogIn } from '../pages/LogIn/LogIn';
// import { SignUp } from '../pages/SignUp/SignUp';

import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';


const Home = lazy(() => import('../pages/Home/Home'));
const LogIn = lazy(() => import('../pages/LogIn/LogIn'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));
const App = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);




 
  //   const dispatch = useDispatch();
  // const contacts = useSelector(contactsSelect)
  // const loading = useSelector(loadingSelect)
 
  // useEffect(() => {
  //   dispatch(fetchAllContacts());
  // }, [dispatch]);

  return (<ChakraProvider>
    <Routes>
      
      <Route path='/' element={<AppBar />}>

        
        {isLoggedIn ? <Route index path='contacts' element={<div>contacts</div>} /> :
        <Route index element={<Home />} />}
      <Route path='register' element={<SignUp />}/>
       <Route path='login' element={<LogIn/>}/>
</Route>
      </Routes>
     </ChakraProvider>
  //   <Section title='Phonebook' >
  //       <InputForm
  //       />
  //    </Section>
  //     <Section title='Contacts' >
        
        

  //       {loading ? <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="96" visible={true} /> : <><SearchContact />
  //         {contacts.length ?
  //           <ContactList />
  //           : <p>Sorry but you don't have contacts!</p>} </>}
                  
  //      </Section>
       
  )
}


export {App}