"use client"
import { Box, useDisclosure } from "@chakra-ui/react";


import NavBar from "./Navbar"

export default function Header (){
    const { isOpen, onOpen, onClose } = useDisclosure()
    
  
    const handleToggle = () => {
      if (!isOpen) {
        onOpen()
      }
      else {
        onClose()
      }
    }
    return (
        <Box pos={'fixed'} w={'full'} zIndex={20}>
          <NavBar isOpen={isOpen} onClose={onClose} onOpen={onOpen} handleToggle={handleToggle} />
        </Box>
    )
}