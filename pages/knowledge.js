import ChakraAwesome from "../components/ChakraAwesome";
import { links } from "../components/header/_data";
import NextLink from "next/link";

import {
  Heading,
  InputGroup,
  InputRightElement,
  Input,
  Stack,
  Text,
  Skeleton,
  Container,
  Flex,
  Box,
  Link,
  Grid,
  Button,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Knowledge() {
  return (
    <Container maxW="container.xl" py="10" px="12">
      <Box bg="white">
        <Heading fontSize="2.5rem" mb="2">
          Knowledge
        </Heading>
        <Text mb="8">
          Reference and support materials for case law research and legal
          education.
        </Text>

        <Flex justify="space-between" mb="10" borderBottomWidth="1px">
          {links[2].children.map((link, idx) => (
            <Link
              href="/category"
              cursor="pointer"
              bg={"transparent"}
              pb="10px"
              _hover={{
                borderBottomWidth: "3px",
                borderColor: "purple",
                paddingBottom: "7px",
                position: "relative",
                bottom: "-1px",
              }}
              borderTopRadius={"md"}
            >
              <Box display="inline-block" mr="3" color="purple">
                {link.icon}
              </Box>
              <Box display="inline-block" fontWeight="500" fontSize="sm">
                {link.label}
              </Box>
            </Link>
          ))}
        </Flex>

        <Grid gap={5} templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={9}>
            <SimpleGrid columns={2} gap="10">
              {links[2].children.map((link, idx) => (
                <Stack pr="5">
                  <Heading size="md" mb="4">
                    <Link href="/article">{link.label}</Link>
                  </Heading>
                  <Link href="/article">
                    <Skeleton speed={2} height="20px" />
                  </Link>
                  <Link href="/article">
                    <Skeleton speed={2} height="20px" />
                  </Link>
                  <Link href="/article">
                    <Skeleton speed={2} height="20px" />
                  </Link>
                  <Link href="/article">
                    <Skeleton speed={2} height="20px" />
                  </Link>
                </Stack>
              ))}
            </SimpleGrid>
          </GridItem>

          <GridItem colSpan={3}>
            <InputGroup mb="5" w="full">
              <InputRightElement color="gray.400">
                <ChakraAwesome icon={["far", "search"]} />
              </InputRightElement>
              <Input bg="white" placeholder="Search Knowledge" />
            </InputGroup>
            <Stack spacing="5" borderWidth="1px" p="7">
              <Heading size="md">Start your free trial</Heading>
              <Text fontSize="xs">
                Start Your Free Trial Gain unrestricted access to ICLR.4's
                comprehensive library of authoritative law reports, unreported
                judgments, case law citator and legislation.
              </Text>
              <Button bg="black" color="white" size="sm">
                Free Trial
              </Button>
            </Stack>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}
