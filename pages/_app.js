import { ChakraProvider } from "@chakra-ui/react";
import Head from 'next/head'
import ChakraAwesome from '../components/ChakraAwesome'
import Image from 'next/image'

import {
  Box,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Link,
  Heading,
  Input,
  Spacer,
  InputGroup,
  Button,
  InputRightElement,
  Wrap,
  WrapItem,
  IconButton,
  Tooltip,
  useColorModeValue as mode,
} from '@chakra-ui/react'

import * as React from 'react'
import { footerLinks, links, socialLinks } from '../components/footer/_data'
import { LinkGroup } from '../components/footer/LinkGroup'
import { SubscribeForm } from '../components/footer/SubscribeForm'
import { NavContent } from '../components/header/NavContent'
import { Theme } from "../components/Theme";

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider theme={Theme}>

      <Head>

        <title>ICLR Site Architecture</title>
        <meta name="description" content="ICLR Site Architecture" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&family=Lato:wght@100;300;400;700;900&display=swap" />

        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&family=Lato:wght@100;300;400;700;900&display=swap"
          media="print" onload="this.media='all'" />

      </Head>

      <Box as="header" py="3" bg="black" position="relative" zIndex="200">
        <Box
          as="nav"
          aria-label="Main navigation"
          maxW="7xl"
          mx="auto"
          pl={{
            base: '6',
            md: '4',
          }}
          pr="6"
        >
          <NavContent.Mobile
            display={{
              base: 'flex',
              lg: 'none',
            }}
          />
          <NavContent.Desktop
            display={{
              base: 'none',
              lg: 'flex',
            }}
          />
        </Box>
      </Box>

      <Box px="10" py='7' boxShadow="base" position="relative" zIndex="100">
       <Box maxW="7xl" mx="auto">
         <Stack
           spacing="5"
           direction={{
             base: 'column',
             md: 'row',
           }}
           justify="space-between"
           align={{
             base: 'flex-start',
             md: 'center',
           }}
         >
           <Stack direction="row">

             <Image
                 src="/images/iclr3-dark.png"
                 alt="ICLR Logo"
                 width={95}
                 height={25}
               />
             <Text pt="0.125rem" color={mode('gray.600', 'gray.400')} pl="10" fontSize="sm">
               <Link fontWeight='500' color="green" ml="5" mr="7" >Browse all topics</Link>
               <Link fontWeight='500'color="green" mr="7" >Case analysis</Link>
               <Link fontWeight='500'color="green" mr="0">Legislation</Link>
             </Text>
           </Stack>

           <HStack
             justify="flex-end"
             flex="1"
             w={{
               base: 'full',
               md: 'auto',
             }}
             spacing={{
               base: '2',
               md: '4',
             }}
           >
             <InputGroup
               maxW={{
                 md: '80',
               }}
               w="full"
             >
               <InputRightElement color="gray.400">
                 <ChakraAwesome icon={['far', 'search']} />
               </InputRightElement>
               <Input bg={mode('white', 'gray.800')} placeholder="Search case law" />
             </InputGroup>

              <Tooltip label="Advanced search" aria-label="Advanced search">
                <Text cursor="pointer">
                <IconButton aria-label="Search database" icon={<ChakraAwesome color="gray.500" fontSize="1.1rem" icon={['fal', 'list-alt']} />} />

                </Text>

              </Tooltip>
              <Tooltip label="Search help" aria-label="Search help">

                 <Text cursor="pointer">

                  <IconButton aria-label="Search database" icon={<ChakraAwesome color="gray.500" fontSize="1.1rem" icon={['fal', 'question-circle']} />} />
                 </Text>
              </Tooltip>

              <Box pl="1"></Box>
             <Button colorScheme="green" flexShrink={0} fontWeight="bold" fontSize="sm">
                <ChakraAwesome icon={['far', 'sliders-h']} mr="2" />
               Personalise
             </Button>
           </HStack>
         </Stack>
       </Box>
     </Box>

      <Component {...pageProps} />

      <Box as="footer" bg={mode('gray.50', 'gray.800')}>
        <Box
          maxW={{
            base: 'xl',
            md: '7xl',
          }}
          mx="auto"
          px={{
            base: '6',
            md: '8',
          }}
          py={{
            base: '12',
            md: '10',
          }}
        >
          <Flex
            direction={{
              base: 'column',
              lg: 'row',
            }}
            justify="space-between"
            mb={{
              base: '10',
              lg: '16',
            }}
            pt="5"
            align="flex-start"
            id="top"
          >
            <SimpleGrid
              flex="1"
              w={{
                base: 'full',
                lg: 'auto',
              }}
              maxW={{
                lg: '2xl',
              }}
              columns={{
                base: 1,
                md: 2,
                lg: 4,
              }}
              spacing={{
                base: '12',
                md: '10',
              }}
              fontSize="sm"
              marginEnd={{
                md: '4',
                lg: '16',
              }}
            >
              {links.map((group, idx) => (
                <LinkGroup key={idx} data={group} />
              ))}
            </SimpleGrid>
            <Box
              flex="2"
              maxW={{
                lg: '420px',
              }}
              ml={{
                lg: 'auto',
              }}
              fontSize="sm"
              mt={{
                base: '12',
                lg: 0,
              }}
            >
              <Text
                casing="uppercase"
                mb={{
                  base: 6,
                  lg: 10,
                }}
                fontWeight="bold"
                letterSpacing="wide"
              >
                Subscribe to our newsletter
              </Text>
              <Text lineHeight="tall">
                News, analysis, comment and updates from ICLR's case law and UK legislation platform.
              </Text>
              <SubscribeForm />
              <HStack
                spacing="3"
                mt={{
                  lg: '5',
                }}
                as="ul"
                listStyleType="none"
              >
                {socialLinks.map((link, idx) => (
                  <Box as="li" key={idx}>
                    <Link href={link.href}>
                      <ChakraAwesome color='gray.400' fontSize="1.1rem" icon={['fab', link.icon]} />
                    </Link>
                  </Box>
                ))}
              </HStack>
            </Box>
          </Flex>

          <Box
            borderTopWidth="1px"
            borderColor="gray.200"
            pt="10"
          >

          <Flex
            direction={{
              base: 'column-reverse',
              lg: 'row',
            }}
            align={{
              base: 'flex-start',
              lg: 'center',
            }}
            justify="space-between"
            fontSize="sm"
          >

            <Flex

              direction={{
                base: 'column',
                md: 'row',
              }}
              spacing={{
                base: '4',
                md: '12',
              }}
              mt={{
                base: '8',
                lg: 1,
              }}
              w={{
                base: 'full',
                lg: 'full',
              }}
              justify={{
                base: 'space-between',
                lg: 'space-between',
              }}

            >
              <Box maxW={ { base: '100%', md: '50%' }}>
                <Wrap fontSize="xs" spacing={{ base: '4', lg: '8' }} mb="5" mt={{ base: '4', lg: '0' }}>

                  {footerLinks.map((link, idx) => (
                    <WrapItem key={idx}>
                      <Box fontWeight='600' as="a" href={link.href}>
                        {link.label}
                      </Box>
                    </WrapItem>
                  ))}
                </Wrap>
                <Text fontSize='xs'>&copy; {new Date().getFullYear()} The Incorporated Council of Law Reporting for England & Wales - Charity No.250605 Limited by Guarantee - Company Registered No.5034</Text>
              </Box>
              <Spacer />
              <Box>


              <Image
                  src="/images/logo-dark.png"
                  alt="ICLR Logo"
                  width={120}
                  height={40}
                />
              </Box>
            </Flex>

          </Flex>
          </Box>
        </Box>
      </Box>

    </ChakraProvider>
  )

}

export default MyApp
