import { useNavMenu } from './useNavMenu'
import { Box, Collapse, SimpleGrid, useDisclosure } from '@chakra-ui/react'
import * as React from 'react'
import { NavLink } from './NavLink'
import { NavMenu } from './NavMenu'
import { SubmenuItem as DesktopMenuItem } from './SubmenuItem'
import ChakraAwesome from '../ChakraAwesome'

const DesktopSubmenu = (props) => {
  const { link } = props
  const { isOpen, getMenuProps, getTriggerProps } = useNavMenu()
  return (
    <>
      <NavLink.Desktop
        display="flex"
        alignItems="center"
        as="button"
        type="button"
        px="4"

        fontWeight="semibold"
        {...getTriggerProps()}
      >
        <Box>{link.label}</Box>
      </NavLink.Desktop>

      <NavMenu {...getMenuProps()} animate={isOpen ? 'open' : 'closed'}>
        <Box maxW="7xl" mx="auto" px="8" pt="6">
          <SimpleGrid spacing="10" columns={2}>
            {link.children?.map((item, idx) => (
              <DesktopMenuItem key={idx} title={item.label} href={item.href} icon={item.icon}>
                {item.description}
              </DesktopMenuItem>
            ))}
          </SimpleGrid>
        </Box>
      </NavMenu>
    </>
  )
}

const MobileSubMenu = (props) => {
  const { link } = props
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Box>
      <NavLink.Mobile
        as="button"
        textAlign="start"
        type="button"
        cursor="pointer"
        onClick={onToggle}
        paddingEnd="4"
      >
        <Box flex="1">{link.label}</Box>
        <ChakraAwesome icon={['far', 'chevron-down']} transform={`rotate(${isOpen ? '180deg' : '0deg'})`} />
      </NavLink.Mobile>
      <Collapse in={isOpen}>
        <Box pl="5">
          {link.children?.map((item, idx) => (
            <NavLink.Mobile key={idx} href={item.href}>
              {item.label}
            </NavLink.Mobile>
          ))}
        </Box>
      </Collapse>
    </Box>
  )
}

export const Submenu = {
  Mobile: MobileSubMenu,
  Desktop: DesktopSubmenu,
}
