import { library, config } from '@fortawesome/fontawesome-svg-core'
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

import { fal } from '@fortawesome/pro-light-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(
  fal,
  fas,
  far,
  fab
)

const icons = {}

import { chakra } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ChakraAwesome = chakra(FontAwesomeIcon)

export default ChakraAwesome;
