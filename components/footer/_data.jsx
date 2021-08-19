import { Badge } from '@chakra-ui/react'
import * as React from 'react'

export const links = [
  {
    title: 'About',
    links: [
      {
        label: 'About ICLR',
        href: '/about',
      },
      {
        label: 'History',
        href: '/about',
      },
      {
        label: 'Sponsorship',
        href: '/about',
      },
      {
        label: 'Contact',
        href: '/about',
      },
    ],
  },
  {
    title: 'Products',
    links: [
      {
        label: 'ICLR.4',
        href: '/products',
        badge: (
          <Badge bg="brand.purple" _hover={{ bg: 'purple' }} color="white" variant="solid" fontSize="0.625rem">
            New
          </Badge>
        ),
      },
      {
        label: 'Publications',
        href: '/products',
      },
      {
        label: 'Support',
        href: '/products',
      },
    ],
  },
  {
    title: 'Knowledge',
    links: [
      {
        label: 'Case Law',
        href: '/knowledge',
      },
      {
        label: 'Legislation',
        href: '/knowledge',
      },
      {
        label: 'Topics',
        href: '/knowledge',
      },
      {
        label: 'Guides',
        href: '/knowledge',
      },
      {
        label: 'FAQs',
        href: '/knowledge',
      },
      {
        label: 'Glossary',
        href: '/knowledge',
      },
    ],
  },
  {
    title: 'Blog',
    links: [
      {
        label: 'Legal Profession',
        href: '/blog',
      },
      {
        label: 'Commentary',
        href: '/blog',
      },
      {
        label: 'Weekly Notes',
        href: '/blog',
      },
      {
        label: 'News and Events',
        href: '/blog',
      },
      {
        label: 'Reviews',
        href: '/blog',
      },
    ],
  }
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
