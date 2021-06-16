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
  IconButton
} from '@chakra-ui/react'

export const FloatingNav = (props) => {

  return (
    <Box>
    <Menu>
      <Tooltip label="Editorial Tools" aria-label="Editorial Tools">

        <MenuButton>

           <IconButton aria-label="Editorial Tools" icon={<ChakraAwesome color="gray.400" icon={['far', 'edit']} />} />
        </MenuButton>
        </Tooltip>

        <MenuList fontSize="sm">
          <MenuItem icon={<ChakraAwesome color="gray.400" fixedWidth icon={['fas', 'edit']} />}>Index Cards</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
      <Tooltip label="Administration" aria-label="Administration">

        <MenuButton>
           <IconButton aria-label="Administration" icon={<ChakraAwesome color="gray.400" icon={['far', 'cogs']} />} />
        </MenuButton>
        </Tooltip>

        <MenuList fontSize="sm">
          <MenuItem icon={<ChakraAwesome color="gray.400" fixedWidth icon={['fas', 'external-link-square']} />}>Create Exports</MenuItem>
          <MenuItem icon={<ChakraAwesome color="gray.400" fixedWidth icon={['fas', 'flag']} />}>Reports</MenuItem>
          <MenuItem icon={<ChakraAwesome color="gray.400" fixedWidth icon={['fas', 'chart-pie']} />}>Usage Stats</MenuItem>
        </MenuList>
      </Menu>

    </Box>
  )

}
