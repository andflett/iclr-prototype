import ChakraAwesome from '../components/ChakraAwesome'
import { CaseHeader } from '../components/CaseHeader'
import { FloatingNav } from '../components/FloatingNav'

import { Box, Switch, Checkbox, Button, Link, Tooltip, Stack, Flex, Heading, Text, Badge, Spacer } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <CaseHeader showDownload={true} hideSearch={true}>

      </CaseHeader>
      {/* <FloatingNav /> */}
      <Box bg="white" py='0'>

        <Flex>
          <Box
            py="5"
            px="5"
            width="275px" height="100vh" borderRight="1px" borderColor="gray.200">
            <Box position="relative" bg="purple.300" p="5" mb="7" borderRadius="md" color="white">
              <Heading display="flex" justify="space-between" fontSize="14px" borderBottomWidth="1px" borderColor="white" pb="3" mb="3">
                <Text>Case Genie Results</Text>
                <Spacer />
                <Tooltip hasArrow label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
                  <Box display="inline-block" ml="2" cursor="help">
                    <ChakraAwesome icon="question-circle" />
                  </Box>
                </Tooltip>
              </Heading>
              <ChakraAwesome
                position="absolute"
                bottom="0%"
                left="10%"

                opacity="0.045"
                color="white"
                fontSize="120px"
                icon={['fai', 'lamp']} />


              <Text fontSize="xs" mb="4">We found 2 cases in the supplied document, <Link >view cases<ChakraAwesome ml="1" fontSize="10px" icon={['fal', "external-link"]} /></Link></Text>
              <Stack spacing="4" pb="1">
                <Flex >
                  <Checkbox size="md" isChecked={true} colorScheme="green" />

                  <Text pl="0.6rem" lineHeight="1.3" fontSize="xs" fontWeight="600">Search within suggested cases</Text>
                  <Spacer />
                </Flex>

                <Flex>
                  <Checkbox borderWidth="0px" borderColor="purple.400" borderRadius="3px" icon={<ChakraAwesome icon="times" />} isChecked={true} size="md" colorScheme="purple" />

                  <Text pl="0.6rem" pr="5" fontSize="xs" fontWeight="600">Include linked cases</Text>
                  <Spacer />
                </Flex>

              </Stack>


            </Box>
            <Heading fontSize="14px" mb="3" borderBottomWidth="1px" borderColor="gray.200" pb="1">Legal Topic</Heading>
            <Stack spacing="3">
              <Flex fontSize="xs">
                <Text fontWeight="600">Commercial</Text>
                <Spacer />
                <Badge fontSize="xs" fontWeight="600" color="white" bg="gray.400">20971</Badge>
              </Flex>
              <Flex fontSize="xs">
                <Text fontWeight="600">Public law</Text>
                <Spacer />
                <Badge fontSize="xs" fontWeight="600" color="white" bg="gray.400">20119</Badge>
              </Flex>
              <Flex fontSize="xs">
                <Text fontWeight="600">Civil litigation</Text>
                <Spacer />
                <Badge fontSize="xs" fontWeight="600" color="white" bg="gray.400">13079</Badge>
              </Flex>
            </Stack>
          </Box>
          <Box textAlign="center" bg="gray.50" flexGrow={4} py="20" boxShadow="inner">
            <ChakraAwesome icon={['fas', 'th-large']} fontSize="13em" color="gray.100" />
          </Box>
        </Flex>

      </Box >
    </>
  )
}
