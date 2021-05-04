import ChakraAwesome from '../components/ChakraAwesome'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box bg="white" textAlign="center" py='10'>
      <Box py="20">
        <ChakraAwesome icon={['fas', 'th-large']} fontSize="13em" color="gray.100" />
      </Box>
    </Box>
  )
}
