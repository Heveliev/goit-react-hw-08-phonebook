import { Grid, GridItem, Input, Button, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/contacts/contatcs-selectors";
import { addContact } from "redux/contacts/contacts-thunk";
import { Notify } from "notiflix";

export const AddContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

 const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget
    const name = form.elements.name.value;
   const number = form.elements.number.value;
   if (!name || !number) {
     Notify.failure('Sorry, but you didn&#180;t enter a value in the field')
     return
   }
   if (contacts?.find(contact => contact.name === name)) {
        Notify.info(`${name} is already in contacts.`);
        return
   }
         dispatch(addContact({ name, number } ))
    form.reset();



  }


    return (<>
        <Heading textAlign="center">Add contact to contacts list</Heading>
    <form onSubmit={handleSubmit}>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={4}
      >
        <GridItem colSpan={{ base: "auto", md: 1 }}>
          <Input
        placeholder="Name"
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian,Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </GridItem>
            <GridItem colSpan={{ base: "auto", md: 1 }}>
          <Input
              placeholder="Phone"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  />
                  
        </GridItem>
        <GridItem textAlign="center" colSpan={{ base: "auto", md: 2 }}>
          <Button type="submit">Add Contact</Button>
        </GridItem>
      </Grid>
      </form>
  </>
  );
}        