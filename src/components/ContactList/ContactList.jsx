import { ContactItem } from "components/ContactItem/ContactItem";
import { useSelector } from 'react-redux';
import { contactsSelect } from 'redux/select/select';
import { filterSelect } from "redux/select/select";


export const ContactList = () => {

    const contacts = useSelector(contactsSelect);
    const filter = useSelector(filterSelect);

    const filterContacts = () => {
        return contacts.filter(contact=>contact.name.toLowerCase().includes(filter))
    }

return(
    <>
    <ul>
        {filterContacts().map(contact=><ContactItem 
        key={contact.id} 
        id={contact.id} 
        name={contact.name} 
        number={contact.phone}

        />)}
        
    </ul>
    </>
)
}
