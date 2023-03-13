
import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from "redux/filter/filter-select";

import { getContacts } from "redux/contacts/contatcs-selectors";
import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { deleteContact } from 'redux/contacts/contacts-thunk';

export const ContactList = () => {
const dispatch = useDispatch()
    const contacts = useSelector(getContacts);

    const filter = useSelector(getFilter);

    const filterContacts = () => {
        return contacts?.filter(contact=>contact.name.toLowerCase().includes(filter))
    }

return (
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
                      top="50%"
                      right="0"
                      transform="translate(-50%, -50%)"
              icon={<CloseIcon />}
              aria-label="Delete Contact"
              variant="ghost"
              onClick={() => dispatch(deleteContact(contact.id))}
            />
        </Box>
      ))}
    </Flex>
  );
}
