import ChakraAwesome from '../components/ChakraAwesome'
import { CaseHeader } from '../components/CaseHeader'
import { FloatingNav } from '../components/FloatingNav'

import { Box, Flex, Button, Container, Stack, Heading, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <>

      <CaseHeader>
        <Button
          px="3"
          as="a"
          href="/entry"
          borderWidth="1px"
          borderColor="gray.200"
          fontWeight='500'
          bg="transparent"
          fontSize="sm"
          pl="4"
          color="gray.600">
          <ChakraAwesome fontSize="0.9rem" color="purple.400" icon={['fa', 'landmark']} mr="0.75rem" />
          Legislation
        </Button>
        <Button
          px="3"
          as="a"
          href="/entry"
          borderWidth="1px"
          borderColor="gray.200"
          fontWeight='500'
          bg="transparent"

          fontSize="sm" color="gray.600">
          <ChakraAwesome fontSize="0.9rem" color="purple.400" icon={['fai', 'lamp']} mr="0.75rem" />
          Case Genie
        </Button>
      </CaseHeader>

      <Container maxW="7xl" bg="white" textAlign="center" py='6'>
        <Box>
          <Flex>
            <Box width="80%" py="20">
              <ChakraAwesome icon={['fas', 'th-large']} fontSize="13em" color="gray.100" />
            </Box>
            <Box width="20%" py="7" align="right">

              <Box
                borderColor="gray.200"
                borderWidth="1px"
                p="10"
                borderRadius="md" align="center">

                <ChakraAwesome mb="4" fontSize="4rem" color="purple.400" icon={['fai', 'genie']} />
                <Heading size="md">Case Genie</Heading>
                <Text mb="6">Upload a document to find similar cases.</Text>

                <Button
                  pl="3"
                  pr="6"
                  _hover={{ bg: "brand.purple" }}
                  bg="brand.purple"
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
