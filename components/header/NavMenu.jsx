import { chakra, useColorModeValue as mode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import * as React from 'react'

export const MotionDiv = motion(chakra.div)
const variants = {
  init: {
    opacity: 0,
    y: -4,
    display: 'none',
    transition: {
      duration: 0,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    display: 'block',
    transition: {
      duration: 0.15,
    },
  },
  closed: {
    opacity: 0,
    y: -4,
    transition: {
      duration: 0.1,
    },
    transitionEnd: {
      display: 'none',
    },
  },
}
export const NavMenu = React.forwardRef((props, ref) => (
  <MotionDiv
    ref={ref}
    initial="init"
    variants={variants}
    outline="0"
    opacity="0"
    bg={mode('white', 'gray.700')}
    w="full"
    shadow="lg"
    px="4"
    pos="absolute"
    insetX="0"
    pt="6"
    pb="12"
    {...props}
  />
))
NavMenu.displayName = 'NavMenu'
