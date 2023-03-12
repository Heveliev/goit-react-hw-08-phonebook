import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const AuthNav = () => {
    return(<><Box marginRight="10px"><NavLink to='/register'>Sing Up</NavLink></Box>
                    <NavLink to='/login'>Log In</NavLink></>)
}