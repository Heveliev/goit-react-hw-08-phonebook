import { useDispatch,useSelector } from "react-redux";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { getUserEmail } from "redux/auth/auth-selectors";
import { logOut } from "redux/auth/auth-thunk";

export const UserMenu = () => {
  const dispatch = useDispatch()
  const email = useSelector(getUserEmail)
    return (
      <Flex align="center">
      <Box mr={2}>
        <Text fontWeight="bold">{email}</Text>
      </Box>
      <Button onClick={()=>dispatch(logOut())} size="sm" variant="ghost">
        Log Out
      </Button>

    </Flex>
  )
}