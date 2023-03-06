
import { Section } from './Section/Section';
import {InputForm} from './InputForm/InputForm';
import {ContactList} from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {SearchContact} from './SearchContact/SearchContact';
import { useEffect } from 'react';
import { fetchAllContacts } from 'redux/contactsSlice/thunk';
import { contactsSelect,loadingSelect } from 'redux/select/select';
import { RotatingLines } from 'react-loader-spinner';

const App = () => {
    const dispatch = useDispatch();
  const contacts = useSelector(contactsSelect)
  const loading = useSelector(loadingSelect)
 
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <>
     <Section title='Phonebook' >
        <InputForm
        />
     </Section>
      <Section title='Contacts' >
        
        

        {loading ? <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="96" visible={true} /> : <><SearchContact />
          {contacts.length ?
            <ContactList />
            : <p>Sorry but you don't have contacts!</p>} </>}
                  
       </Section>
       </>
  )
}


export {App}