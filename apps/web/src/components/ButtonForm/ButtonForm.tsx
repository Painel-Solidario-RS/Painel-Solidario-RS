import { Box, Button, Checkbox, FormControl } from '@mui/material'
import { JSXElementConstructor, ReactElement, useState } from 'react'

type ButtonFormProps = {
  content: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  error?: boolean
  helperText?: string
  link?: string
  icon?: ReactElement<string | JSXElementConstructor<string>> | undefined
}

const ButtonForm: React.FC<ButtonFormProps> = ({ content }) => {
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
      <Button
        sx={{
          padding: '0 16px',
          width: '100%',
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
        onClick={handleButtonClick}
      >
        <Box
          component="span"
          sx={{ flexGrow: 1, textAlign: 'left', color: '#484649' }}
        >
          {content}
        </Box>
        <Checkbox
          checked={checked}
          onChange={handleButtonClick}
          sx={{ padding: 0, width: '16px', height: '16px' }}
        />
      </Button>
    </FormControl>
  )
}

export default ButtonForm
