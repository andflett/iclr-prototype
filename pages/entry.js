import ChakraAwesome from '../components/ChakraAwesome'
import { CaseHeader } from '../components/CaseHeader'
import { FloatingNav } from '../components/FloatingNav'

import { Box, Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <CaseHeader showDownload={true}>
        <Button
          pl="3"
          pr="6"
          as="a"
          href="/genie"
          _hover={{ bg: "purple.600" }}
          bg="purple.500"
          fontWeight="500"
          color="white"
          fontSize="sm">
          <ChakraAwesome fontSize="0.9rem" color="white" icon={['fai', 'lamp']} mr="0.75rem" />
          Case Genie
        </Button>
      </CaseHeader>
      <FloatingNav />
      <Box bg="white" textAlign="center" py='6'>
        <Box py="20">
          <ChakraAwesome icon={['fas', 'th-large']} fontSize="13em" color="gray.100" />
        </Box>
      </Box>
    </>
  )
}
