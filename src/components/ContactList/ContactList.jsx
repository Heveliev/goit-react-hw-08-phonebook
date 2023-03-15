
import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from "redux/filter/filter-select";
import { ModalWindow } from 'components/ModalWindow/ModalWindow'; 

import { getContacts } from "redux/contacts/contatcs-selectors";
import { Box, Flex, Text, IconButton, Portal } from "@chakra-ui/react";
import { CloseIcon,EditIcon } from "@chakra-ui/icons";
import { deleteContact } from 'redux/contacts/contacts-thunk';
import { isOpen } from 'redux/modal/modal-slice';
import { getIsOpen } from 'redux/modal/modal-select';
import { useState } from 'react';

export const ContactList = () => {
  const [id, setId] = useState();
const dispatch = useDispatch()
    const contacts = useSelector(getContacts);

    const filter = useSelector(getFilter);

  const isOpenModal = useSelector(getIsOpen);
    const filterContacts = () => {
        return contacts?.filter(contact=>contact.name.toLowerCase().includes(filter))
  }
  const findContact = id => {
  return contacts?.find(item => item.id === id);
};
  

return (<>
    <Flex direction="column">
      {filterContacts().map((contact) => (
        <Box
          key={contact.id}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
              mb={4}
              position="relative"
        >
          <Box p={4}>
            <Text fontSize="xl" fontWeight="bold">
              {contact.name}
            </Text>
            <Text mt={2}>{contact.number}</Text>
          </Box>
                  <IconButton
                      position='absolute'
                      top="0"
                      right="0"
              icon={<CloseIcon />}
              aria-label="Delete Contact"
              variant="ghost"
              onClick={() => dispatch(deleteContact(contact.id))}
          />
          <IconButton
          data-id={contact.id}
            position='absolute'
            bottom="0"
                      right="0"
              icon={<EditIcon/>}
              aria-label="Delete Contact"
              variant="ghost"
            onClick={() => { dispatch(isOpen()); setId(contact.id) }}
          />

        </Box>
      ))}
  </Flex>
          <Portal>  {isOpenModal && <ModalWindow  id={id} values={findContact(id)} />}</Portal>
       </>
  );
}
