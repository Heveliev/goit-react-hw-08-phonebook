import { Box,Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const AuthNav = () => {
    return(<><Box marginRight="10px"><Button size="sm" variant="ghost"><NavLink to='/register'>Sing Up</NavLink></Button></Box>
                   <Button size="sm" variant="ghost"><NavLink to='/login'>Log In</NavLink></Button></>)
}

