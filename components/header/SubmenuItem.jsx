import { Square, Box, Center, chakra, HStack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

export const SubmenuItem = (props) => {
  const { title, icon, children, href, ...rest } = props
  return (
    <chakra.a
      className="group"
      href={href}
      m="-4"
      py="2"
      px="3"
      display="flex"
      alignItems="flex-start"
      transition="all 0.2s"
      rounded="lg"
      _hover={{
        bg: mode('gray.100', 'gray.600'),
      }}
      _focus={{
        shadow: 'outline',
      }}
      {...rest}
    >
      <Square
      _groupHover={{
        color: mode('green', 'inherit'),
      }}
        size="8" rounded="md"  color="green.500" fontSize="1.25rem">
        {icon}
      </Square>
      <Box marginStart="4" as="dl">
        <HStack as="dt">
          <Text
            paddingTop="0.25rem"
            fontWeight="500"
            fontSize="0.9rem"
            color={mode('gray.900', 'white')}
            _groupHover={{
              color: mode('gray.600', 'inherit'),
            }}
          >
            {title}
          </Text>

        </HStack>

      </Box>
    </chakra.a>
  )
}
