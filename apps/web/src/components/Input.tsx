import { FormControl, FormLabel, IconButton, InputAdornment, TextField } from '@mui/material'
import { JSXElementConstructor, ReactElement } from 'react'

type InputProps = {
  label: string
  placeholder: string
  type?: string
  name?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  error?: boolean
  helperText?: string
  link?: string
  icon?: ReactElement<any, string | JSXElementConstructor<any>> | undefined
}

const Input: React.FC<InputProps> = ({ label, placeholder, icon }) => {
  return (
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
          padding: '1px 1px 1px 1px '
        }}
      >
        {label}
        <TextField
          id="outlined-multiline-flexible"
          placeholder={placeholder}
          sx={{
            paddingTop: '0px',
            width: '100%',
            borderRadius: '8px',
            marginBottom: 1,
            boxShadow: '-1px 1px 4px #c7c7c7'
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" aria-label="ícone" onClick={() => console.log('implementar')}>
                  {icon}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormLabel>
    </FormControl>
  )
}

export default Input
