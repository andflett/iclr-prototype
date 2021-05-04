import { Badge } from '@chakra-ui/react'
import * as React from 'react'

export const links = [
  {
    title: 'Products',
    links: [
      {
        label: 'ICLR.4',
        href: '#',
        badge: (
          <Badge colorScheme="green" variant="solid" fontSize="0.625rem">
            New
          </Badge>
        ),
      },
      {
        label: 'Publications',
        href: '#',
      },
      {
        label: 'Support',
        href: '#',
      },
    ],
  },
  {
    title: 'Knowledge',
    links: [
      {
        label: 'Case law',
        href: '#',
      },
      {
        label: 'Legislation ',
        href: '#',
      },
      {
        label: 'Topics',
        href: '#',
      },
      {
        label: 'Guides',
        href: '#',
      },
      {
        label: 'FAQs',
        href: '#',
      },
      {
        label: 'Glossary',
        href: '#',
      },
    ],
  },
  {
    title: 'Blog',
    links: [
      {
        label: 'Legal profession',
        href: '#',
      },
      {
        label: 'Commentary',
        href: '#',
      },
      {
        label: 'Weekly Notes',
        href: '#',
      },
      {
        label: 'News and Events',
        href: '#',
      },
      {
        label: 'Reviews',
        href: '#',
      },
    ],
  },
  {
    title: 'About',
    links: [
      {
        label: 'About ICLR',
        href: '#',
      },
      {
        label: 'History',
        href: '#',
      },
      {
        label: 'Sponsorship',
        href: '#',
      },
      {
        label: 'Contact',
        href: '#',
      },
    ],
  },
]
export const socialLinks = [
  {
    label: 'Facebook',
    icon: 'facebook',
    href: 'https://en-gb.facebook.com/TheICLR/',
  },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/company/incorporated-council-of-law-reporting-for-england-and-wales-iclr-/',
  },
  {
    label: 'LinkedIn',
    icon: 'twitter',
    href: 'https://twitter.com/theiclr',
  },
]
export const footerLinks = [
  {
    label: 'Terms and Conditions',
    href: '#',
  },
  {
    label: 'Privacy Policy',
    href: '#',
  },
  {
    label: 'Cookies',
    href: '#',
  },
]
