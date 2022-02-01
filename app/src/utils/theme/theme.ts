import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    lightGray: '#F0F0F0',
    darkGray: '#303030',
    gray: '#C4C4C4',
    iris: '#5D5FEF',
    lavanda: '#A5A6F6',
  },
  styles: {
    global: {
      fontFamily: 'Open Sans',
      fontWeight: '400',
    },
  },
  components: {
    Input: {
      variants: {
        primary: {
          field: {
            maxWidth: '480px',
            width: '100%',
            padding: '24px 24px',
            border: '2px solid #A5A6F6',
            borderRadius: '8px',
            fontSize: '16px',

            _focus: {
              border: '2px solid #5D5FEF',
            },
          },
        },
      },
      defaultProps: {
        size: 'md',
        variant: 'primary',
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          borderRadius: '5px',
          color: '#ccc',
        },
      },
      sizes: {
        md: {
          control: {
            w: '20px',
            h: '20px',
          },
        },
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: '8px',
        padding: '24px 32px',
        textTransform: 'uppercase',
        fontFamily: 'Rambla',
      },
      variants: {
        primary: {
          bg: '#5D5FEF',
          color: 'white',

          _hover: {
            bg: '#5D5FEF',
            opacity: 0.8,
          },
        },
      },
    },
  },
});
