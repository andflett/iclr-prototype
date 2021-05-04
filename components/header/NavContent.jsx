import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  useDisclosure,
  VisuallyHidden,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { NavLink } from './NavLink'
import { NavMenu } from './NavMenu'
import { Submenu } from './Submenu'
import { ToggleButton } from './ToggleButton'
import { links } from './_data'
import Image from 'next/image'
import { Avatar, Menu, MenuItem, MenuButton, MenuList } from "@chakra-ui/react"
import ChakraAwesome from '../ChakraAwesome'

const MobileNavContext = (props) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Flex align="center" justify="space-between" className="nav-content__mobile" {...props}>
        <Box flexBasis="6rem">
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
        <Box as="a" rel="home" mx="auto">
          <Image
              src="/images/logo.png"
              alt="ICLR Logo"
              width={95}
              height={35}
            />
        </Box>
        <Box
          visibility={{
            base: 'hidden',
            sm: 'visible',
          }}
        >
          <Button as="a" colorScheme="green">
            Get Started
          </Button>
        </Box>
      </Flex>
      <NavMenu animate={isOpen ? 'open' : 'closed'}>
        {links.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile key={idx} link={link} />
          ) : (
            <NavLink.Mobile key={idx} href={link.href}>
              {link.label}
            </NavLink.Mobile>
          ),
        )}
        <Button colorScheme="green" w="full" size="lg" mt="5">
          Search ICLR.4
        </Button>
      </NavMenu>
    </>
  )
}

const DesktopNavContent = (props) => {
  return (
    <Flex className="nav-content__desktop" align="center" justify="space-between" {...props}>
      <Box pt="0.25rem" as="a" href="#" rel="home">
        <Image
            src="/images/logo.png"
            alt="ICLR Logo"
            width={95}
            height={35}
          />
      </Box>
      <HStack pl="53%" as="ul" id="nav__primary-menu" aria-label="Main Menu" listStyleType="none">
        {links.map((link, idx) => (
          <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
            {link.children ? (
              <Submenu.Desktop link={link} />
            ) : (
              <NavLink.Desktop href={link.href}>{link.label}</NavLink.Desktop>
            )}
          </Box>
        ))}
      </HStack>
      <HStack spacing="8" justify="space-between">

        <Menu>
          <MenuButton>
            <Avatar size="sm" bg="white" icon={<ChakraAwesome icon={['fas', 'user']} fontSize="1rem" />} />
          </MenuButton>
          <MenuList>
            <MenuItem icon={<ChakraAwesome icon={['fas', 'bars']} />}>Personalise Feed</MenuItem>
            <MenuItem icon={<ChakraAwesome icon={['fas', 'unlock']} />}>Change password</MenuItem>
            <MenuItem icon={<ChakraAwesome icon={['fas', 'sign-out']} />}>Sign out</MenuItem>
          </MenuList>
        </Menu>

      </HStack>
    </Flex>
  )
}

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
}
