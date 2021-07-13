import { extendTheme } from "@chakra-ui/react"

const Theme = extendTheme({
  fonts: {
    body: "Lato, Helvetica, sans-serif",
    heading: "Poppins, Helvetica, sans-serif",
    mono: "Menlo, monospace"
  },
  "colors": {
    "brand": {
      'orange': '#FF5722',
      'red': '#E91E63',
      'Blue': '#00BCD4',
      'green': '#0e783b',
      'purple': '#7a4a87'
    },
    "purple": {
      50: '#fcedfe',
      100: '#e5cde8',
      200: '#cfacd4',
      300: '#b98cc1',
      400: '#a16bae',
      500: '#865194',
      600: '#6c3f74',
      700: '#502c53',
      800: '#341a33',
      900: '#160614',
    },
    "orange": {
      50: '#ffeedd',
      100: '#ffcbaf',
      200: '#ffa67e',
      300: '#ff7c4c',
      400: '#ff511a',
      500: '#e64600',
      600: '#b44200',
      700: '#813700',
      800: '#4f2400',
      900: '#210d00',
    },
    "red": {
      50: '#ffe4ed',
      100: '#fdb7c9',
      200: '#f68aa7',
      300: '#f05b89',
      400: '#eb2e6e',
      500: '#d11448',
      600: '#a40d2e',
      700: '#760618',
      800: '#490209',
      900: '#1e0000',
    },
    "blue": {
      50: '#d6f8ff',
      100: '#aaecff',
      200: '#7ae4ff',
      300: '#47dfff',
      400: '#1addff',
      500: '#00cce6',
      600: '#0092b4',
      700: '#006081',
      800: '#00354f',
      900: '#00111e',
    },
    "green": {
      50: '#e0fef5',
      100: '#b7f8e0',
      200: '#8df2c9',
      300: '#61ecae',
      400: '#38e792',
      500: '#22ce72',
      600: '#18a054',
      700: '#0d7238',
      800: '#034525',
      900: '#00190a',
    }
  }
})

export default Theme;
