import { chakra, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
const DesktopNavLink = React.forwardRef((props, ref) => {
  const { active, ...rest } = props
  return (
    <chakra.a
      ref={ref}
      display="inline-block"
      px="5"
      py="2"
      my="4"
      borderRadius="md"
      fontWeight="semibold"
      aria-current={active ? 'page' : undefined}
      color={mode('white', 'gray.400')}
      transition="all 0.2s"
      {...rest}
      _hover={{
        bg: 'brand.purple',
        color: 'white'
      }}
      _active={{
        bg: 'brand.purple',
        color: 'white'
      }}
      _activeLink={{
        bg: 'brand.purple',
        color: 'white'
      }}
    />
  )
})
DesktopNavLink.displayName = 'DesktopNavLink'

export const MobileNavLink = (props) => {
  const { active, ...rest } = props
  return (
    <chakra.a
      aria-current={active ? 'page' : undefined}
      w="full"
      display="flex"
      alignItems="center"
      height="14"
      fontWeight="semibold"
      borderBottomWidth="1px"
      {...rest}
    />
  )
}
export const NavLink = {
  Mobile: MobileNavLink,
  Desktop: DesktopNavLink,
}
