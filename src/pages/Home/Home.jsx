import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const Home = () => {
   return (
    <Box marginTop="30px" h="100vh" d="flex" alignItems="center" justifyContent="center">
      <Box textAlign="center">
        <Heading>Welcome to phonebook</Heading>
        <Text fontSize="xl" mt={4} mb={8}>
          If you're not with us yet then click by all means{" "}
                   <Button colorScheme="blue" size="sm">
                       <NavLink to='/register' >Signup</NavLink>
                   </Button>
        </Text>
        <Text fontSize="xl">
          If you already have an account then{" "}
          <Button colorScheme="green" size="sm">
          <NavLink to='/login'>Login</NavLink>
          </Button>
        </Text>
      </Box>
    </Box>
  );
}

export default Home