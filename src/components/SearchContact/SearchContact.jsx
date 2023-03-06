import { Input } from "./SearchContact.styled";
import { useDispatch } from "react-redux";
import { filter } from "redux/filterSlice/filterSlice";


export const SearchContact = () => {
    const dispatch = useDispatch();

      const filterContacts = evt => {
    const evtTarget = evt.currentTarget.value.toLowerCase();
    dispatch(filter(evtTarget)) 
  }
    return(
        <>
        <h4>Find contacts by name</h4>
        <Input

        onChange={filterContacts}
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
/>
        </>
    )
}
