import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  useDisclosure,
  VisuallyHidden,
  InputGroup,
  InputRightElement,
  Input,
  Spacer,
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

        <InputGroup w="15rem">
          <InputRightElement color="gray.400">
            <ChakraAwesome icon={['far', 'search']} />
          </InputRightElement>
          <Input bg={mode('white', 'gray.800')} placeholder="Search case law" />
        </InputGroup>

      </NavMenu>
    </>
  )
}

const DesktopNavContent = (props) => {
  return (
    <Flex className="nav-content__desktop" align="center" justify="" {...props}>

      <Box pt="0.25rem" pl="2" as="a" href="/" rel="home">
        <Image
            src="/images/logo.png"
            alt="ICLR Logo"
            width={95}
            height={35}
          />
      </Box>

      <Spacer />

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

      </HStack>

      { !props.hideSearch &&
        <form action="/">
        <InputGroup w="15rem" ml="10">
          <InputRightElement color="gray.400">
            <Button type="submit" bg="white">
              <ChakraAwesome icon={['far', 'search']} />
            </Button>
          </InputRightElement>
          <Input fontSize="sm" bg={mode('white', 'gray.800')} placeholder="Search Case Law" />
        </InputGroup>
        </form>
      }

    </Flex>
  )
}

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
}
