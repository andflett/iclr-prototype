import ChakraAwesome from '../components/ChakraAwesome'
import { CaseHeader } from '../components/CaseHeader'
import { FloatingNav } from '../components/FloatingNav'

import { Box, Heading, Text, Container, Flex, Spacer, Link, Stack, HStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <CaseHeader showDownload={true} />

      <Box bg="white" py="4">
        <Container maxW="4xl" py="10" textAlign="center">

          <ChakraAwesome mb="3" fontSize="6rem" color="purple" icon={['fai', 'genie']} />
          <Heading size="lg" mb="10">Case Genie</Heading>

          <Flex mb="5" pt="2">
            <Box width="45%" align="left">
              <Stack spacing="8">
                <Box>
                  <Heading as="h2" size="sm" mb="2" >
                    <ChakraAwesome icon={['fal', 'bullseye-pointer']} color="purple.400" mr="3" />
                    Intelligent
                  </Heading>
                  <Text color="gray.600">Case Genie uses artificial intelligence tools to analyse your text for legal concepts and recommend similar cases for research.</Text>
                </Box>
                <Box>
                  <Heading as="h2" size="sm" mb="2" >
                    <ChakraAwesome icon={['fal', 'shield-check']} color="purple.400" mr="3" />
                    Confidential
                  </Heading>
                  <Text color="gray.600">Your text is encrypted immediately and only retained for the duration of the session.</Text>
                </Box>
                <Box>
                  <Heading as="h2" size="sm" mb="2" >
                    <ChakraAwesome icon={['fal', 'layer-group']} color="purple.400" mr="3" />
                    Comprehensive
                  </Heading>
                  <Text color="gray.600">Your text is compared against our entire database of English judgments dating back to 1865.</Text>
                </Box>
              </Stack>

            </Box>

            <Spacer />

            <Stack spacing="5" width="50%">

              <Box
                align="center"
                borderWidth="1px"
                borderStyle="dashed"
                borderColor="purple.200"
                borderRadius="md"
                bg="purple.50"
                p="7">
                <HStack spacing="5" align="center" justify="center" mb="2">
                  <ChakraAwesome icon={['fal', 'file-pdf']} color="purple.500" fontSize="1.325rem" />
                  <ChakraAwesome icon={['fal', 'file-word']} color="purple.500" fontSize="1.325rem" />
                  <ChakraAwesome icon={['fal', 'file-alt']} color="purple.500" fontSize="1.325rem" />

                </HStack>
                <Text color="gray.900" fontSize="0.9rem" px="20">Drop document or <Link color="purple.600" fontWeight="700">select a file</Link> to find similar cases.</Text>
              </Box>

              <Box
                align="left"
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="lg"
                bg="white"
                px="5"
                minH="10rem"
                py="4">
                <Text color="gray.700" fontSize="0.9rem">
                  <ChakraAwesome icon={['fal', 'paste']} mr="3" color="gray.400" />
                  Or paste any legal text here...
                </Text>
              </Box>
            </Stack>


          </Flex>

        </Container>
      </Box>
    </>
  )
}
