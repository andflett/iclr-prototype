import ChakraAwesome from '../components/ChakraAwesome'
import { CaseHeader } from '../components/CaseHeader'

import { Box } from '@chakra-ui/react'

export default function About() {
  return (
    <>
      <Box bg="white" textAlign="center" py='6'>
        <Box py="20">
          <ChakraAwesome icon={['fas', 'th-large']} fontSize="13em" color="gray.100" />
        </Box>
      </Box>
    </>
  )
}
