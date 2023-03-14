import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const Home = () => {
   return (
    <Box marginTop="30px" h="100vh" d="flex" alignItems="center" justifyContent="center">
      <Box textAlign="center">
        <Heading>Welcome to phonebook</Heading>
        <Text fontSize="xl" mt={4} mb={8}>
          If you're not with us yet then click by all means{" "}
                   
                       <NavLink to='/register' ><Button colorScheme="blue" size="sm">Signup</Button></NavLink>
                   
        </Text>
        <Text fontSize="xl">
           If you already have an account then{" "}
           <NavLink  to='/login'>
          <Button colorScheme="green" size="sm">
          Login
             </Button>
             </NavLink>
        </Text>
      </Box>
    </Box>
  );
}

export default Home