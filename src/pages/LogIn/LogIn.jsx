import {Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { useDispatch} from 'react-redux';
import { logIn } from 'redux/auth/auth-thunk';

function LogIn() {
  const dispatch = useDispatch();


  
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(logIn({ email, password }))
    form.reset()
  }

  return (
    <Box p={4} mx="auto" maxW="md">
      <Box my={8} textAlign="center">
        <h1>Log In</h1>
      </Box>
      <Box>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Email address
              <Input
                  type="email"
                  name="email"
                /></FormLabel>
            </FormControl>
            <FormControl>
              <FormLabel>Password
              <Input
                type="password"
                name="password"
              /></FormLabel>
            </FormControl>
            <Button colorScheme="teal" type="submit">
              Log In
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}

export default LogIn