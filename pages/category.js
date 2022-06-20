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

export default function Category() {
  return (
    <Container maxW="container.xl" py="10" px="12">
      <Box bg="white">
        <Heading fontSize="2.5rem" mb="2">
          Knowledge
        </Heading>
        <Text mb="9">
          Reference and support materials for case law research and legal
          education.
        </Text>

        <Flex
          justify="space-between"
          mb="10"
          borderBottomWidth="1px"
          borderColor="purple.50"
        >
          {links[2].children.map((link, idx) => (
            <Link
              href="/category"
              cursor="pointer"
              bg={idx === 0 ? "purple.50" : "transparent"}
              _hover={{ bg: "purple.50" }}
              color={idx === 0 ? "purple" : "purple"}
              borderTopRadius={"md"}
              px="10"
              py="2"
            >
              {" "}
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
            <Stack spacing="5" pr="5">
              <Link href="/article">
                <Skeleton speed={2} height="100px" />
              </Link>
              <Link href="/article">
                <Skeleton speed={2} height="100px" />
              </Link>
              <Link href="/article">
                <Skeleton speed={2} height="100px" />
              </Link>
              <Link href="/article">
                <Skeleton speed={2} height="100px" />
              </Link>
            </Stack>
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
