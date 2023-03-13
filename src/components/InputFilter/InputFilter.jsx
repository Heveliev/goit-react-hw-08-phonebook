import { Input,Box,Text } from "@chakra-ui/react"
import { useDispatch } from "react-redux";
import { filter } from "redux/filter/filter-slice";

export const InputFilter = () => {
    const dispatch = useDispatch();

    const filterContacts = evt => {
    const evtTarget = evt.currentTarget.value.toLowerCase();
    dispatch(filter(evtTarget)) 
  }
  
    return (<Box p={4}>
        <Text fontSize="xl" mt={2}>Enter the name of the contact you are looking for:</Text>
      <Input
                onChange={filterContacts}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Search contacts"
        mb={4}
      />     
          </Box>
        )
}