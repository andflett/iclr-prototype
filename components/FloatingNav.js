import ChakraAwesome from './ChakraAwesome'
import Image from 'next/image'

import {
  Box,
  Flex,
  HStack,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  VStack
} from '@chakra-ui/react'

export const FloatingNav = (props) => {

  return (
    <Box position="fixed" right="1.25rem" top="35%">
      <VStack spacing="3">

    
        <Menu>
          <Tooltip label="Editorial Tools" aria-label="Editorial Tools" hasArrow="true" placement='left'>
            <MenuButton>
              <IconButton color="white" bg="purple" aria-label="Editorial Tools" icon={<ChakraAwesome color="white" icon={['fal', 'edit']} />} />
            </MenuButton>
          </Tooltip>

          <MenuList fontSize="sm">
            <MenuItem icon={<ChakraAwesome color="gray.400" fixedWidth icon={['fas', 'edit']} />}>Index Cards</MenuItem>
          </MenuList>

        </Menu>

        <Menu>
          <Tooltip label="Administration" aria-label="Administration" hasArrow="true" placement='left'>
            <MenuButton>
               <IconButton bg="purple" aria-label="Administration" icon={<ChakraAwesome color="white" icon={['fal', 'cogs']} />} />
            </MenuButton>
          </Tooltip>

          <MenuList fontSize="sm">
            <MenuItem icon={<ChakraAwesome color="gray.400" fixedWidth icon={['fas', 'external-link-square']} />}>Create Exports</MenuItem>
            <MenuItem icon={<ChakraAwesome color="gray.400" fixedWidth icon={['fas', 'flag']} />}>Reports</MenuItem>
            <MenuItem icon={<ChakraAwesome color="gray.400" fixedWidth icon={['fas', 'chart-pie']} />}>Usage Stats</MenuItem>
          </MenuList>
        </Menu>
      </VStack>

    </Box>
  )

}
