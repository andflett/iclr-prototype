import * as React from 'react'
import ChakraAwesome from '../ChakraAwesome'

export const links = [
  {
    label: 'About',
    href: '#',
    children: [
      {
        label: 'About ICLR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/about',
        icon: <ChakraAwesome icon={['fas', 'info-square']}  />,
      },
      {
        label: 'History',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/about',
        icon: <ChakraAwesome icon={['fas', 'landmark-alt']} />,
      },
      {
        label: 'Sponsorship',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/about',
        icon: <ChakraAwesome icon={['fas', 'hands-helping']} />,
      },
      {
        label: 'Contact',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/about',
        icon: <ChakraAwesome icon={['fas', 'paper-plane']} />,
      },
    ],
  },
  {
    label: 'Products',
    href: '#',
    children: [
      {
        label: 'ICLR.4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/products',
        icon: <ChakraAwesome icon={['fas', 'search']}  />,
      },
      {
        label: 'Publications',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/products',
        icon: <ChakraAwesome icon={['fas', 'books']}/>,
      },
      {
        label: 'Support',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/products',
        icon: <ChakraAwesome icon={['fas', 'question-circle']} />,
      }
    ],
  },
  {
    label: 'Knowledge',
    children: [
      {
        label: 'Case Law',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/knowledge',
        icon: <ChakraAwesome fixedWidth icon={['fas', 'gavel']}  />,
      },
      {
        label: 'Legislation',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/knowledge',
        icon: <ChakraAwesome fixedWidth icon={['fas', 'balance-scale']} />,
      },
      {
        label: 'Topics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/knowledge',
        icon: <ChakraAwesome fixedWidth icon={['fas', 'bookmark']} />,
      },
      {
        label: 'Guides',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/knowledge',
        icon: <ChakraAwesome fixedWidth icon={['fas', 'books']} />,
      },
      {
        label: 'FAQs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/knowledge',
        icon: <ChakraAwesome fixedWidth icon={['fas', 'question-circle']} />,
      },
      {
        label: 'Glossary',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/knowledge',
        icon: <ChakraAwesome fixedWidth icon={['fas', 'font-case']} />,
      },
    ],
  },
  {
    label: 'Blog',
    href: '#',
    children: [
      {
        label: 'Legal Profession',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/blog',
        icon: <ChakraAwesome icon={['fas', 'briefcase']}  />,
      },
      {
        label: 'Commentary',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/blog',
        icon: <ChakraAwesome icon={['fas', 'comments']} />,
      },
      {
        label: 'Weekly Notes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/blog',
        icon: <ChakraAwesome icon={['fas', 'clipboard']} />,
      },
      {
        label: 'News and Events',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/blog',
        icon: <ChakraAwesome icon={['fas', 'microphone-alt']} />,
      },
      {
        label: 'Reviews',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: '/blog',
        icon: <ChakraAwesome icon={['fas', 'book-open']} />,
      },
    ],
  },
]
