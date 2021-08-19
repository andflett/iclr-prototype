import ChakraAwesome from '../components/ChakraAwesome'
import { CaseHeader } from '../components/CaseHeader'
import { FloatingNav } from '../components/FloatingNav'

import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <CaseHeader showDownload={true} />
      <FloatingNav />
      <Box bg="white" textAlign="center" py='6'>
        <Box py="20">
          <ChakraAwesome icon={['fas', 'th-large']} fontSize="13em" color="gray.100" />
        </Box>
      </Box>
    </>
  )
}
