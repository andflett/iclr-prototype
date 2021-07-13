import Theme from "../components/Theme"

import ChakraAwesome from '../components/ChakraAwesome'
import { CaseHeader } from '../components/CaseHeader'
import ColorDescription from '../components/elements/Color'

import { Box, SimpleGrid, Heading, Container } from '@chakra-ui/react'

export default function About() {
  return (
    <>
      <Box bg="white" py='6'>

        <Container maxW="5xl" py="5">

          <Heading as="h3" color="gray.700" size="lg" mb="5" mb="5">Core Colour Palette</Heading>

          <SimpleGrid columns={[1, null, 3]} spacing="10" pt="5">
            { Theme.colors.brand &&
              Object.keys(Theme.colors.brand).map(function(keyName, keyIndex) {
                return (<ColorDescription
                  key={keyIndex}
                  color={Theme.colors.brand[keyName]}
                  name={ keyName.toString().charAt(0).toUpperCase() + keyName.toString().slice(1) }
                />)
              })
            }
          </SimpleGrid>
          
          <Heading as="h3" color="gray.700" size="lg" mb="5" mt="10">Extended Colour Palettes</Heading>

          <SimpleGrid columns={[1, null, 3]} spacing="10" py='7'>
            { Theme.colors.purple &&
              Object.keys(Theme.colors.purple).map(function(keyName, keyIndex) {
                return (<ColorDescription
                  color={Theme.colors.purple[keyName]}
                  name={ "Purple "+keyName.toString() }
                />)
              })
            }
          </SimpleGrid>
          <SimpleGrid columns={[1, null, 3]} spacing="10" py='7'>
            { Theme.colors.green &&
              Object.keys(Theme.colors.green).map(function(keyName, keyIndex) {
                return (<ColorDescription
                  color={Theme.colors.green[keyName]}
                  name={ "Green "+keyName.toString() }
                />)
              })
            }
          </SimpleGrid>
          <SimpleGrid columns={[1, null, 3]} spacing="10" py='7'>
            { Theme.colors.red &&
              Object.keys(Theme.colors.red).map(function(keyName, keyIndex) {
                return (<ColorDescription
                  color={Theme.colors.red[keyName]}
                  name={ "Red "+keyName.toString() }
                />)
              })
            }
          </SimpleGrid>
          <SimpleGrid columns={[1, null, 3]} spacing="10" py='7'>
            { Theme.colors.blue &&
              Object.keys(Theme.colors.blue).map(function(keyName, keyIndex) {
                return (<ColorDescription
                  color={Theme.colors.blue[keyName]}
                  name={ "Blue "+keyName.toString() }
                />)
              })
            }
          </SimpleGrid>
          <SimpleGrid columns={[1, null, 3]} spacing="10" py='7'>
            { Theme.colors.orange &&
              Object.keys(Theme.colors.orange).map(function(keyName, keyIndex) {
                return (<ColorDescription
                  color={Theme.colors.orange[keyName]}
                  name={ "Orange "+keyName.toString() }
                />)
              })
            }
          </SimpleGrid>

          <SimpleGrid columns={[1, null, 3]} spacing="10" py='7'>
            { Theme.colors.gray &&
              Object.keys(Theme.colors.gray).map(function(keyName, keyIndex) {
                return (<ColorDescription
                  color={Theme.colors.gray[keyName]}
                  name={ "Gray "+keyName.toString() }
                />)
              })
            }
          </SimpleGrid>
        </Container>

      </Box>
    </>
  )
}
