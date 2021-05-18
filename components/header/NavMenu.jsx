import { chakra, useColorModeValue as mode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import * as React from 'react'

export const MotionDiv = motion(chakra.div)
const variants = {
  init: {
    opacity: 0,
    display: 'none',
    transition: {
      duration: 0,
    },
  },
  open: {
    opacity: 1,
    display: 'block',
    transition: {
      duration: 0.15,
    },
  },
  closed: {
    opacity: 0,
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
    marginTop="-0.25rem"
    left="-6.25rem"
    bg={mode('white', 'gray.700')}
    shadow="lg"
    minW="17rem"
    borderRadius="md"
    borderWidth="1px"
    px="6"
    pos="absolute"
    pt="6"
    pb="6"
    _before={{
      content: `""`,
      position: 'absolute',
      width: '0px',
      height: '0px',
      left: '45%',
      top: '-10px',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderBottom: '10px solid white'
    }}
    {...props}
  />
))
NavMenu.displayName = 'NavMenu'
