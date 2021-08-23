import ChakraAwesome from '../components/ChakraAwesome'
import { CaseHeader } from '../components/CaseHeader'
import { FloatingNav } from '../components/FloatingNav'

import { Box, Heading, Text, Button, Container, Flex, Spacer, Link, Stack, HStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <CaseHeader showDownload={true} />

      <Box bg="white" py="4">
        <Container maxW="4xl" py="8" textAlign="center">

          <ChakraAwesome mb="3" fontSize="6rem" color="brand.purple" icon={['fai', 'genie']} />
          <Heading size="lg" mb="9">Case Genie</Heading>

          <Flex mb="5" pt="2">

            <Box width="50%" pr="5%" align="left">
              <Stack spacing="8" pt="1">
                <Box>
                  <Heading as="h2" size="sm" mb="2" >
                    <ChakraAwesome icon={['fal', 'bullseye-pointer']} color="brand.purple" mr="3" />
                    Intelligent
                  </Heading>
                  <Text color="gray.600">Case Genie uses artificial intelligence tools to analyse your text for legal concepts and recommend similar cases for research.</Text>
                </Box>
                <Box>
                  <Heading as="h2" size="sm" mb="2" >
                    <ChakraAwesome icon={['fal', 'shield-check']} color="brand.purple" mr="3" />
                    Confidential
                  </Heading>
                  <Text color="gray.600">Your text is encrypted immediately and only retained for the duration of the session.</Text>
                </Box>
                <Box>
                  <Heading as="h2" size="sm" mb="2" >
                    <ChakraAwesome icon={['fal', 'layer-group']} color="brand.purple" mr="3" />
                    Comprehensive
                  </Heading>
                  <Text color="gray.600">Your text is compared against our entire database of English judgments dating back to 1865.</Text>

                </Box>
                <Box>
                  <Button variant="link" leftIcon={<ChakraAwesome icon="question-circle" mr="1" />} fontSize='sm' colorScheme="purple">Frequently Asked Questions</Button>
                </Box>
              </Stack>
            </Box>

            <Spacer />

            <Box width="50%">

              <Box
                align="center"
                borderWidth="1px"
                borderStyle="dashed"
                borderColor="purple.400"
                borderRadius="md"
                bg="#fdf6fe"
                mb="6"
                p="8">
                <HStack spacing="5" align="center" justify="center" mb="3">
                  <ChakraAwesome icon={['fal', 'file-pdf']} color="brand.purple" fontSize="1.325rem" />
                  <ChakraAwesome icon={['fal', 'file-word']} color="brand.purple" fontSize="1.325rem" />
                  <ChakraAwesome icon={['fal', 'file-alt']} color="brand.purple" fontSize="1.325rem" />

                </HStack>
                <Text color="gray.900" fontSize="0.9rem" px="20">Drop document or <Link color="brand.purple" fontWeight="700">select a file</Link> to find similar cases.</Text>
              </Box>

              <Box
                align="left"
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="lg"
                bg="white"
                px="5"
                mb='4'
                minH="10.25rem"
                py="4">
                <Text color="gray.600" fontSize="0.9rem">
                  Or paste text to analyse (maximum 100,000 characters)...
                </Text>
              </Box>

              <Button
                width="full"
                leftIcon={<ChakraAwesome icon="file-search" mr="1" />}
                fontSize='sm'
                colorScheme="purple">Analyse Text</Button>

            </Box>


          </Flex>

        </Container>
      </Box>
    </>
  )
}
