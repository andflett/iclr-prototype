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

import Link from 'next/link'

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
        <Link href="/">
          <Button w="full" leftIcon={<ChakraAwesome icon={['far', 'search']} /> } colorScheme="green" fontWeight="bold" fontSize="lg" mt="5">
            Search Case Law
          </Button>
        </Link>
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
      <HStack as="ul" id="nav__primary-menu" aria-label="Main Menu" listStyleType="none">
        {links.map((link, idx) => (
          <Box position="relative" as="li" key={idx} id={`nav__menuitem-${idx}`}>
            {link.children ? (
              <Submenu.Desktop link={link} />
            ) : (
              <NavLink.Desktop href={link.href}>{link.label}</NavLink.Desktop>
            )}
          </Box>
        ))}
        <Box pl="5">
          <Link href="/">
            <Button leftIcon={<ChakraAwesome icon={['far', 'search']} /> } colorScheme="green" flexShrink={0} fontWeight="bold" fontSize="sm">
              Search Case Law
            </Button>
          </Link>
        </Box>
      </HStack>

    </Flex>
  )
}

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
}
