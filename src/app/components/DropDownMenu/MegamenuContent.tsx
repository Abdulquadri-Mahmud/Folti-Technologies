import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Radio, RadioGroup, Stack, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import MegaMenu from './MegaMenu';

interface MegaMenuContentProp {}


const MegaMenuContent: React.FC<MegaMenuContentProp> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState('right')

  return (
    <>
     <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction='row' mb='4'>
          <Radio value='top'>Top</Radio>
          <Radio value='right'>Right</Radio>
          <Radio value='bottom'>Bottom</Radio>
          <Radio value='left'>Left</Radio>
        </Stack>
      </RadioGroup>
      <Button colorScheme='blue' onClick={onOpen}>
        Open
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen}>
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
};

export default MegaMenuContent;