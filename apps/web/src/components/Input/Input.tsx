import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField
} from '@mui/material'
import { JSXElementConstructor, ReactElement, useState } from 'react'

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
  icon?: ReactElement<string | JSXElementConstructor<string>> | undefined
}

const Input: React.FC<InputProps> = ({ label, placeholder, icon, type }) => {
  const [checked, setChecked] = useState(false)

  const handleButtonClick = () => {
    setChecked(prevChecked => {
      return !prevChecked
    })
  }
  return (
    <FormControl
      sx={{
        display: 'flex',
        fontFamily: 'Inter',
        width: '100%'
      }}
    >
      <br />
      <Box>
        {type == 'text' && (
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
            <TextField
              id="outlined-multiline-flexible"
              placeholder={placeholder}
              sx={{
                paddingTop: '0px',
                width: '100%',
                height: '48px',
                borderRadius: '8px',
                marginBottom: 1
              }}
              InputProps={{
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
          </FormLabel>
        )}
        {type == 'button' && (
          <Button
            sx={{
              padding: '8px 16px',
              width: '100%',
              height: '48px',
              borderRadius: '8px',
              marginBottom: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textTransform: 'none',
              border: '1px solid #aaacae'
            }}
            onClick={handleButtonClick}
          >
            <Box
              component="span"
              sx={{ flexGrow: 1, textAlign: 'left', color: '#484649' }}
            >
              {label}
            </Box>
            <Checkbox
              checked={checked}
              onChange={handleButtonClick}
              sx={{ padding: 0 }}
            />
          </Button>
        )}
      </Box>
    </FormControl>
  )
}

export default Input
