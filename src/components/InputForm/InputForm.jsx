import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Input } from 'components/Input/Input';
import { Box, Btn } from './InputForm.styled';
import { addContact } from 'redux/contactsSlice/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelect } from 'redux/select/select';

const InputForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelect)


  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget
    const name = form.elements.name.value;
    const phone = form.elements.number.value
       if (contacts.find(contact=>contact.name === name) ){
        Notify.info(`${name} is already in contacts.`);
        return

       }
    dispatch(addContact({ name, phone } ))
    form.reset();

  }

  return (
    <Box
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian,Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        titleBox="Name"
        />
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        titleBox="Number"
      />
            <Btn type="submit">Add contact</Btn>
            </Box>
        )
      }
export {InputForm}

