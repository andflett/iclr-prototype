import ChakraAwesome from './ChakraAwesome'
import Image from 'next/image'

import {
  Box,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Link,
  Heading,
  Input,
  Spacer,
  InputGroup,
  Button,
  InputRightElement,
  Wrap,
  WrapItem,
  IconButton,
  Tooltip,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Avatar,
  MenuGroup,
  ButtonGroup,
  useColorModeValue as mode,
} from '@chakra-ui/react'

export const CaseHeader = (props) => {

  return (
    <Box bg="gray.50" py='7' boxShadow="base" sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '0', }} zIndex="100">
     <Box
       pl={{
         base: '6',
         md: '4',
       }}
       pr="6"
      maxW="7xl"
      mx="auto">
       <Stack
         spacing="5"
         direction={{
           base: 'column',
           md: 'row',
         }}
         justify="space-between"
         align={{
           base: 'flex-start',
           md: 'center',
         }}
       >
         <Stack direction="row">

            <Box mr="7.5rem" pt="0.45rem">
           <Image
               src="/images/iclr3-dark.png"
               alt="ICLR Logo"
               width={95}
               height={25}

             />
             </Box>

             <HStack
               justify="flex-end"
               flex="1"
               w={{
                 base: 'full',
                 md: 'auto',
               }}
               spacing={{
                 base: '2',
                 md: '4',
               }}
             >
               <InputGroup

                 w="20rem"
               >
                 <InputRightElement color="gray.400">
                   <ChakraAwesome icon={['far', 'search']} />
                 </InputRightElement>
                 <Input bg={mode('white', 'gray.800')} placeholder="Search case law" />
               </InputGroup>

                <Tooltip label="Advanced search" aria-label="Advanced search">
                  <Text cursor="pointer">
                    <Button fontSize="sm" color="gray.500" aria-label="Search database" leftIcon={<ChakraAwesome color="gray.500" fontSize="1.1rem" icon={['fal', 'list-alt']} />} >Advanced</Button>
                  </Text>
                </Tooltip>
                <Tooltip label="Search help" aria-label="Search help">
                   <Text cursor="pointer">
                    <Button fontSize="sm" color="gray.500" aria-label="Search database" leftIcon={<ChakraAwesome color="gray.500" fontSize="1.1rem" icon={['fal', 'question-circle']} />}>Help</Button>
                   </Text>
                </Tooltip>

               <Button colorScheme="green" flexShrink={0} fontWeight="bold" fontSize="sm">
                  <ChakraAwesome icon={['far', 'file-search']} mr="2" />
                 Case Analyser
               </Button>
             </HStack>

         </Stack>

         <HStack spacing="4" justify="space-between">

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

           <Menu>
             <MenuButton>
              <IconButton bg="black" aria-label="Editorial Tools" icon={<ChakraAwesome color="white" icon={['fas', 'user']} />} />
             </MenuButton>
             <MenuList fontSize="sm">
                <MenuGroup title="andrew@flett.cc">
               <MenuItem icon={<ChakraAwesome color="gray.400" fixedWidth icon={['fas', 'bars']} />}>Personalise Feed</MenuItem>
               <MenuItem icon={<ChakraAwesome color="gray.400" fixedWidth icon={['fas', 'unlock']} />}>Change password</MenuItem>
               <MenuItem icon={<ChakraAwesome color="gray.400" fixedWidth icon={['fas', 'sign-out']} />}>Sign out</MenuItem>
               </MenuGroup>
             </MenuList>
           </Menu>

         </HStack>
       </Stack>
     </Box>
    </Box>
)}
