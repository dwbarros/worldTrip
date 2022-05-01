import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '700': '#47585B',
      '400': '#999999',
      '300': 'rgba(153, 153, 153, 0.5)',
      '200': '#DADADA',
      '100': '#F5F8FA'
    },
    yellow: {
      '900': '#FFBA08',
      '500': 'rgba(255, 186, 8,0.5)'
    },
    text: '#F5F8FA'
    
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.700',
      }
    }
  }
})