import {
  Box,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  InputBase,
  SxProps
} from '@mui/material'
import { JSXElementConstructor, ReactElement } from 'react'

type InputProps = {
  label: string
  placeholder: string
  name?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  error?: boolean
  helperText?: string
  link?: string
  icon?: ReactElement<string | JSXElementConstructor<string>> | undefined
  sxInput?: SxProps | undefined
}

const Input: React.FC<InputProps> = ({ label, placeholder, icon, sxInput }) => {
  return (
    <Box sx={sxInput}>
      <FormControl
        sx={{
          display: 'flex',
          fontFamily: 'Inter',
          width: '100%'
        }}
      >
        <FormLabel
          sx={{
            fontSize: '12px',
            fontWeight: '700',
            lineHeight: '16px',
            textAlign: 'left',
            height: 'Hug (24px)',
            color: '#484649',
            paddingBottom: '8px',
            padding: '1px 1px 1px 1px '
          }}
        >
          {label}
        </FormLabel>
        <InputBase
          id="outlined-multiline-flexible"
          placeholder={placeholder}
          sx={{
            padding: '0 16px',
            width: '328px',
            height: '48px',
            borderRadius: '8px',
            marginBottom: 1,
            display: 'flex',
            alignItems: 'center',
            lineHeight: '16px',
            justifyContent: 'space-between',
            textTransform: 'none',
            border: '1px solid #aaacae'
          }}
          inputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  aria-label="ícone"
                  onClick={() => console.log('implementar')}
                  className="green-color"
                >
                  {icon}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </FormControl>
    </Box>
  )
}

export default Input
