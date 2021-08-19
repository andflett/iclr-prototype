import ChakraAwesome from '../components/ChakraAwesome'
import { CaseHeader } from '../components/CaseHeader'
import { links } from '../components/header/_data'

import { Heading, InputGroup, InputRightElement, Input, Stack, Skeleton, Container, Flex, Box, Grid, GridItem } from '@chakra-ui/react'

export default function Blog() {
  return (
    <Container maxW="container.lg" py="10">

      <Box bg="white">

        <Heading fontSize="2.5rem" mb="10">Blog</Heading>

        <Flex justify='space-between' mb="10" borderBottomWidth="1px" pb="4">

          {links[3].children.map((link, idx) =>
          (
            <Box cursor="pointer">
              <Box display="inline-block" mr="3" color='purple'>{link.icon}</Box>
              <Box display="inline-block" fontWeight="500" fontSize="sm">{link.label}</Box>
            </Box>
          )
          )}

        </Flex>

        <Grid gap={5} mb="5" templateColumns="repeat(12, 1fr)" >

          <GridItem colSpan={9}>

            <Flex mb="5">
              <Box width="20%">
                <Skeleton speed={2} height='10em' width='100%'>

                </Skeleton>
              </Box>
              <Box width="75%" pl="5%">
                <Stack>
                  <Skeleton speed={2} height="20px" />
                  <Skeleton speed={2} height="20px" />
                  <Skeleton speed={2} height="20px" />
                  <Skeleton speed={2} height="20px" />
                  <Skeleton speed={2} height="20px" />
                </Stack>
              </Box>
            </Flex>
            <Flex mb="5">
              <Box width="20%">
                <Skeleton speed={2} height='10em' width='100%'>

                </Skeleton>
              </Box>
              <Box width="75%" pl="5%">
                <Stack>
                  <Skeleton speed={2} height="20px" />
                  <Skeleton speed={2} height="20px" />
                  <Skeleton speed={2} height="20px" />
                  <Skeleton speed={2} height="20px" />
                  <Skeleton speed={2} height="20px" />
                </Stack>
              </Box>
            </Flex>
            <Flex mb="5">
              <Box width="20%">
                <Skeleton speed={2} height='10em' width='100%'>

                </Skeleton>
              </Box>
              <Box width="75%" pl="5%">
                <Stack>
                  <Skeleton speed={2} height="20px" />
                  <Skeleton speed={2} height="20px" />
                  <Skeleton speed={2} height="20px" />
                  <Skeleton speed={2} height="20px" />
                  <Skeleton speed={2} height="20px" />
                </Stack>
              </Box>
            </Flex>

          </GridItem>

          <GridItem colSpan={3}>
            <InputGroup
              mb="5"
              w="full"
            >
              <InputRightElement color="gray.400">
                <ChakraAwesome icon={['far', 'search']} />
              </InputRightElement>
              <Input bg='white' placeholder="Search Blog" />
            </InputGroup>
            <Stack>
              <Skeleton speed={2} height="10px" />
              <Skeleton speed={2} height="10px" />
              <Skeleton speed={2} height="10px" />
            </Stack>
          </GridItem>
        </Grid>

      </Box>

    </Container>
  )
}
