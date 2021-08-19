import ChakraAwesome from '../components/ChakraAwesome'
import { CaseHeader } from '../components/CaseHeader'
import { FloatingNav } from '../components/FloatingNav'

import { Box, Flex, Button, Container, Stack, Heading, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <>

      <CaseHeader>
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

      <Container maxW="7xl" bg="white" textAlign="center" py='6'>
        <Box>
          <Flex>
            <Box width="80%" py="20">
              <ChakraAwesome icon={['fas', 'th-large']} fontSize="13em" color="gray.100" />
            </Box>
            <Box width="20%" py="5" align="right">

              <Box
                borderColor="gray.200"
                borderWidth="1px"
                p="10"

                borderRadius="md" align="center">

                <ChakraAwesome mb="4" fontSize="4rem" color="purple" icon={['fai', 'genie']} />

                <Heading size="md">Case Genie</Heading>
                <Text mb="6">Upload a document to find similar cases.</Text>

                <Button
                  pl="3"
                  pr="6"
                  _hover={{ bg: "purple.600" }}
                  bg="purple.500"
                  fontWeight="500"
                  color="white"
                  as="a"
                  href="/genie"
                  fontSize="sm">
                  <ChakraAwesome fontSize="0.9rem" color="white" icon={['fai', 'lamp']} mr="0.75rem" />
                  Try Case Genie
                </Button>
              </Box>

            </Box>

          </Flex>
        </Box>
      </Container>
    </>
  )
}
