import { Drawer, DrawerBody, DrawerContent, DrawerHeader,
   DrawerOverlay, IconButton, useDisclosure, Flex, Menu,
    MenuButton, MenuItem, MenuList, Link, Button
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";


interface AsideMenuProp {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const AsideMenu: React.FC<AsideMenuProp> = ({ isOpen, onOpen, onClose }) => {
  const [placement, setPlacement] = useState('right');

  return (
    <>
      <Drawer  onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>
            <Flex justify="space-between" alignItems="center">
              <span>Menu</span>
              <IconButton onClick={onClose} aria-label="Close" icon={<CloseIcon />} />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Flex justifyContent={'center'}>
              <Button color="black" rounded={50} bg="aliceblue" mt={5}  fontSize={16}  letterSpacing={2} display={{base: 'block'}}>Support</Button>
            </Flex>
            <Flex direction={'column'} gap={5} fontWeight={'bold'} mt={5}>
              <Link href="/">Home</Link>
              <Link href="about">About Us</Link>

            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AsideMenu;
