import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { Flex, Spacer, IconButton, useColorMode, Box, HStack } from '@chakra-ui/react';
import { RotatingLines } from 'react-loader-spinner';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';

export const AppBar = () => {
  const IsLoggedIn = useSelector(getIsLoggedIn);

    const { colorMode, toggleColorMode } = useColorMode();
    return ( <>
        <header>
        <Flex bg="gray.700" w="100%" p={4} color="white" alignItems="center">
          {IsLoggedIn ? <NavLink to ='/contacts'>Contacts</NavLink> : <NavLink to='/'>Home</NavLink>}
            <Spacer />
          {IsLoggedIn ? <UserMenu/> :<AuthNav/>}
      <HStack spacing={4}>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          variant="ghost"
        />
      </HStack>
        </Flex>
   
      </header>
      <Suspense fallback={<Box position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)">
        <RotatingLines strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96" visible={true} />
      </Box>}>
          <Outlet />
          </Suspense>

        </>
  )
}