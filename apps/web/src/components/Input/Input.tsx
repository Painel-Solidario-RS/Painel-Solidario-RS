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
  icon?: ReactElement<null, string | JSXElementConstructor<null>> | undefined
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
      <Box sx={{ paddingLeft: '21px', paddingRight: '26px' }}>
        {type == 'text' && (
          <FormLabel
            sx={{
              fontSize: '12px',
              fontWeight: '700',
              lineHeight: '28px',
              textAlign: 'left',
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
            <Box component="span" sx={{ flexGrow: 1, textAlign: 'left' }}>
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
