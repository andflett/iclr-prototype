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
  HStack,
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowRight,
} from "@fortawesome/pro-regular-svg-icons";

export default function Category() {
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

        <Flex mb="10" borderBottomWidth="1px">
          {links[2].children.map((link, idx) => (
            <Link
              mr="20"
              href={link.href}
              cursor="pointer"
              position="relative"
              borderColor="purple"
              paddingBottom={idx === 0 ? "7px" : "10px"}
              borderBottomWidth={idx === 0 ? "3px" : "0px"}
              bottom={idx === 0 ? "-1px" : "0px"}
              _hover={{
                borderBottomWidth: "3px",
                paddingBottom: "7px",
                bottom: "-1px",
              }}
              color={idx === 0 ? "purple" : "inherit"}
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
            <Stack spacing="2" pr="5">
              <Link href="/article">
                <Skeleton speed={2} height="25px" />
              </Link>
              <Link href="/article">
                <Skeleton speed={2} height="10px" />
              </Link>
              <Link href="/article">
                <Skeleton speed={2} height="10px" />
              </Link>
              <Link href="/article">
                <Skeleton speed={2} height="10px" />
              </Link>
            </Stack>
            <Stack spacing="2" pr="5" mt="8">
              <Link href="/article">
                <Skeleton speed={2} height="25px" />
              </Link>
              <Link href="/article">
                <Skeleton speed={2} height="10px" />
              </Link>
              <Link href="/article">
                <Skeleton speed={2} height="10px" />
              </Link>
              <Link href="/article">
                <Skeleton speed={2} height="10px" />
              </Link>
            </Stack>
            <HStack gap={5} mt="8">
              <Button
                size="sm"
                variant={"outline"}
                color="gray.600"
                fontWeight="500"
              >
                1
              </Button>
              <Button
                size="sm"
                variant={"outline"}
                color="gray.600"
                fontWeight="500"
              >
                2
              </Button>
              <Button
                size="sm"
                variant={"outline"}
                color="gray.600"
                fontWeight="500"
              >
                3
              </Button>
              <Button
                size="sm"
                color="gray.600"
                fontWeight="500"
                variant={"outline"}
                rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
              >
                Next page
              </Button>
            </HStack>
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
