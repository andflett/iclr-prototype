import ChakraAwesome from '../components/ChakraAwesome'
import { CaseHeader } from '../components/CaseHeader'
import { FloatingNav } from '../components/FloatingNav'

import { Box, Heading, Text, Container, Flex, Spacer, Link, Stack, HStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <CaseHeader showDownload={true} />

      <Box bg="white" textAlign="center" py="4">
        <Container maxW="3xl" py="10">

          <ChakraAwesome mb="3" fontSize="6rem" color="purple" icon={['fai', 'genie']} />
          <Heading size="lg" mb="10">Case Genie</Heading>

          <Flex mb="5">
            <Box width="45%" align="left" pl="5%">
              <Stack spacing="8">
                <Box>
                  <Heading as="h2" size="sm" mb="2" >
                    <ChakraAwesome icon={['fal', 'shield-check']} color="purple.400" mr="3" />
                    Lorem
                  </Heading>
                  <Text color="gray.600">Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
                </Box>
                <Box>
                  <Heading as="h2" size="sm" mb="2" >
                    <ChakraAwesome icon={['fal', 'bullseye-pointer']} color="purple.400" mr="3" />
                    Ipsum
                  </Heading>
                  <Text color="gray.600">Ut enim ad minim veniam, quis nostrud exercitation ullamco</Text>
                </Box>
                <Box>
                  <Heading as="h2" size="sm" mb="2" >
                    <ChakraAwesome icon={['fal', 'layer-group']} color="purple.400" mr="3" />
                    Cupidatat
                  </Heading>
                  <Text color="gray.600">Sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </Box>
              </Stack>

            </Box>
            <Spacer />
            <Box width="50%" align="center" borderWidth="1px" borderStyle="dashed" borderColor="purple.300" borderRadius="lg" bg="purple.50" p="20">
              <HStack spacing="5" align="center" justify="center" mb="5">
                <ChakraAwesome icon={['fal', 'file-pdf']} color="purple.600" fontSize="1.325rem" />
                <ChakraAwesome icon={['fal', 'file-word']} color="purple.600" fontSize="1.325rem" />
                <ChakraAwesome icon={['fal', 'file-alt']} color="purple.600" fontSize="1.325rem" />

              </HStack>
              <Text color="gray.800">Drag document here or <Link color="purple.500" fontWeight="700">select a file</Link> from your computer</Text>
            </Box>
          </Flex>

        </Container>
      </Box>
    </>
  )
}
