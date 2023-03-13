import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-thunk';


 function SignUp() {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
   const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(register({ name, email, password }));
    
    console.log(name, email, password)
    form.reset();
  }
  
  return (
    <Box p={4} mx="auto" maxW="md">
      <Box my={8} textAlign="center">
        <h1>Sign In</h1>
      </Box>
      <Box>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name
                <Input
                  borderWidth="2px"
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                /></FormLabel>
            </FormControl>
            <FormControl>
              <FormLabel>Email address
                <Input
                  borderWidth="2px"
                  type="email"
                  name="email"
                /></FormLabel>
            </FormControl>
            <FormControl >
              <FormLabel>Password
                <Input
                  borderWidth="2px"
                  type="password"
                  name="password"
                /></FormLabel>
            </FormControl>
            <Button colorScheme="teal" type="submit">
              Sign Up
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}


export default SignUp