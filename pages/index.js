import ChakraAwesome from '../components/ChakraAwesome'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box bg="gray.100" textAlign="center" py='10'>
      <Box py="15">
        <ChakraAwesome icon={['fas', 'th-large']} fontSize="10em" color="gray.200" />
      </Box>
    </Box>
  )
}
