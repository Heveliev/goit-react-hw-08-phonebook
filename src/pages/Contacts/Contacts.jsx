import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "redux/auth/auth-selectors"
import { Box, Heading, Spinner } from "@chakra-ui/react";
import { AddContactForm } from "components/AddContacrForm/AddContacrForm";
import { ContactList } from "components/ContactList/ContactList";
import { InputFilter } from "components/InputFilter/InputFilter";
import { getContacts, getIsLoading } from "redux/contacts/contatcs-selectors";
import { fetchAllContacts } from 'redux/contacts/contacts-thunk';
import { useEffect } from 'react';

const Contacts = () => {
    const name = useSelector(getUserName);
    const loading = useSelector(getIsLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllContacts());
    }, [dispatch]);
    const contacts = useSelector(getContacts);
    return (<>

        <AddContactForm />
        {loading ? <>
            <Box position="fixed"
        left="50%"
        transform="translate(-50%)">
        <Spinner thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </Box>
        </> : <>
            <Heading textAlign="center">Your contact list, {name}:</Heading>
        <InputFilter />
                {contacts?.length ?
                    <ContactList /> :
                    <Heading margin="20px">Sorry, but you don't have contacts</Heading>}
        </>}
        
         
            
    </>)
}



export default Contacts