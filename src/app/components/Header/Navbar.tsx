'use client'

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  IconButton,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Logo from "@/app/assets/logo/folti_logo.svg"
import { Image } from '@chakra-ui/next-js'
import MegaMenu from '../DropDownMenu/MegaMenu'
import AsideMenu from '../DropDownMenu/AsideMenu'

interface NavBarProp {
  isOpen: boolean
  onOpen: () => void;
  onClose: () => void
  handleToggle: () => void
}
interface Props {
  children: React.ReactNode
}

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

const NavBar:React.FC<NavBarProp> = ({isOpen, onOpen, onClose, handleToggle}) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} 
      px={4} as={'header'} 
      position={"fixed"} 
      top={0} left={0}
      w={useBreakpointValue({ base: "100%", md: "100%"})}
       >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Image src={Logo} alt="Logo" w={60}/>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <Button color="white" rounded={50} bg="Green" 
                fontSize={12} 
              letterSpacing={2} display={{base: 'none', md: 'block'}}>Support</Button>
           <IconButton aria-label="Open menu" icon={ isOpen ? <CloseIcon /> :<HamburgerIcon />} onClick={handleToggle} />
           {/* <MegaMenu isOpen={isOpen} onClose={onClose} /> */}
           <AsideMenu isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
           
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default NavBar;