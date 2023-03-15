import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    FormControl,
    FormLabel,
    Input,

} from "@chakra-ui/react";
 import { Notify } from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import { editContact, fetchAllContacts } from "redux/contacts/contacts-thunk";
import { getIsOpen } from "redux/modal/modal-select";
import { isOpen } from "redux/modal/modal-slice";

export function ModalWindow({id,values}) {
    const open = useSelector(getIsOpen)
  const dispatch = useDispatch();
  const { name, number } = values;


  

    const handleSubmit = evt => {
        evt.preventDefault();
         const form = evt.currentTarget
    const name = form.elements.name.value;
   const number = form.elements.number.value;
   if (!name || !number) {
     Notify.failure('Sorry, but you didn&#180;t enter a value in the field')
     return
        }
    dispatch(editContact({ name:name, number:number, id }))
              dispatch(isOpen())
      dispatch(fetchAllContacts())

    }
  return (
      <Modal isOpen={open} onClose={()=>dispatch(isOpen())}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Please make changes</ModalHeader>
              <ModalBody>
                  <form onSubmit={handleSubmit}>
           <FormControl>
            <FormLabel>Name</FormLabel>
                      <Input
                                placeholder="Name"
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian,Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                          defaultValue={name}
                      />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Number</FormLabel>
                      <Input
                               placeholder="Phone"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                          defaultValue={number}
                      />
                      </FormControl>
                      <div style={{ display: 'flex', justifyContent: 'end', gap: '10px', margin: '10px' }} >
                          <Button type="submit" colorScheme="blue" >Save</Button>

                      <Button variant="outline" mr={3} onClick={()=>dispatch(isOpen())}>
            Cancel
          </Button></div>

</form>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}