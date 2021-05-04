import * as React from 'react'
import ChakraAwesome from '../ChakraAwesome'

export const links = [
  {
    label: 'About',
    href: '#',
  },
  {
    label: 'Products',
    href: '#',
  },
  {
    label: 'Knowledge',
    children: [
      {
        label: 'Get Help',
        description: 'Read our documentation and FAQs, or get in touch.',
        href: '#',
        icon: <ChakraAwesome icon={['fas', 'user']} />,
      },
      {
        label: 'Events & Meetups',
        description: 'Discover and join your local Sketch community.',
        href: '#',
        icon: <ChakraAwesome icon={['fas', 'user']} />,
      },
      {
        label: 'Extensions',
        description: 'Do even more with Assistants, plugins and integrations.',
        href: '#',
        icon: <ChakraAwesome icon={['fas', 'user']} />,
      },
      {
        label: 'Blog',
        description: 'Get updates, articles and insights from the team.',
        href: '#',
        icon: <ChakraAwesome icon={['fas', 'user']} />,
      },
    ],
  },
  {
    label: 'Blog',
    href: '#',
  },
]
