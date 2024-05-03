import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';


export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <motion.div style={{background:"black",overflow:"hidden"}} initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 1}} >
      <Box  background="gray.900" px={5}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box color="white" fontSize="medium">Logo</Box>
            <Stack direction={'row'} spacing={7}>

                <Button variant="none" color="white">
                    About Us
                </Button> 
                <Button variant="none" color="white">
                    Products
                </Button> 
                <Button variant="none" color="white">
                    Contact
                </Button> 


            </Stack>
        </Flex>
      </Box>
      </motion.div>
    </>
  );
}