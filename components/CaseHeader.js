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
    <Box bg="gray.50" py='7' boxShadow="md" sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '0', }} zIndex="100">
      <Box
        px={{
          base: '6',
          md: '5',
        }}
        maxW="full"
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

            <Box mr="1rem" ml="3" pt="0.45rem">
              <Image
                src="/images/iclr3-dark.png"
                alt="ICLR Logo"
                width={95}
                height={25}

              />
            </Box>


            {!props.hideSearch &&
              <HStack
                justify="flex-end"
                flex="1"
                w={{
                  base: 'auto',
                  md: 'auto',
                }}
                spacing={{
                  base: '0',
                  md: '4',
                }}
              >
                <InputGroup w="20rem" mr="0">
                  <InputRightElement color="brand.purple">
                    <ChakraAwesome icon={['fas', 'search']} />
                  </InputRightElement>
                  <Input bg={mode('white', 'gray.800')} placeholder="Search case law" />
                </InputGroup>



                {props.children}

              </HStack>
            }

          </Stack>

          <HStack spacing="4" justify="space-between">



            {props.showDownload &&
              <Menu>
                <Tooltip label="Share or save" aria-label="Share or save" hasArrow="true" placement='bottom'>

                  <MenuButton >
                    <IconButton bg="gray.50" borderColor="gray.200" borderWidth="1px" borderRadius="lg" aria-label="Editorial Tools" icon={
                      <ChakraAwesome color="brand.purple" icon={['fas', 'download']} />} />
                  </MenuButton>
                </Tooltip>

                <MenuList fontSize="sm">
                  <MenuItem icon={<ChakraAwesome color="gray.400" fixedWidth icon={['fas', 'file-pdf']} />}>Download PDF</MenuItem>
                  <MenuItem icon={<ChakraAwesome color="gray.400" fixedWidth icon={['fas', 'envelope']} />}>Email Link</MenuItem>
                  <MenuItem icon={<ChakraAwesome color="gray.400" fixedWidth icon={['fas', 'link']} />}>Copy Link</MenuItem>
                </MenuList>

              </Menu>
            }

            <Menu>
              <MenuButton >
                <IconButton bg="gray.50" borderColor="gray.200" borderWidth="1px" borderRadius="lg" aria-label="Editorial Tools" icon={
                  <ChakraAwesome color="brand.purple" icon={['fas', 'user']} />} />
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
  )
}
