import { Box,Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const AuthNav = () => {
    return(<><Box marginRight="10px"><NavLink to='/register'><Button size="sm" variant="ghost">Sing Up</Button></NavLink></Box>
                   <NavLink to='/login'><Button size="sm" variant="ghost">Log In</Button></NavLink></>)
}

