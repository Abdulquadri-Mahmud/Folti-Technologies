import { Avatar, Box, Center, Flex, IconButton, MenuDivider, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../Header/Header';
import MegamenuContent from './MegamenuContent';

interface MegaMenuProp {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProp> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut',  }}
          style={{ position: 'fixed', top: 60, left: 0, right: 0, bottom: 0, background: 'white', height:'fit-content' }}
        >
          {/* Your menu content goes here */}
          <MegamenuContent/>
        </motion.div>
      )}
      
    </AnimatePresence>
  );
};

export default MegaMenu;


