import { createTheme } from '@mui/material/styles'

const Theme = createTheme({
  palette: {
    primary: {
      light: '#D8FEE3',
      main: '#036c03',
      dark: '#000000',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#aaa'
    },
    error: {
      main: '#E05353'
    },
    background: { default: '#014F01' },
    text: { primary: '#000000', secondary: '#484649' }
  }
})
export { Theme }
