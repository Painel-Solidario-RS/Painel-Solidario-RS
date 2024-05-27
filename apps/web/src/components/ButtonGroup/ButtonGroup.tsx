import React from 'react'
import { Button, Box, ButtonProps, FormLabel, FormControl } from '@mui/material'

interface ButtonGroupProps {
  label: string
  options: string[]
  onClick: (option: string) => void
  selectedOption?: string
  buttonProps?: ButtonProps
}

const ButtonGroup = ({
  label,
  options,
  onClick,
  selectedOption,
  buttonProps
}: ButtonGroupProps) => {
  return (
   <FormControl
   fullWidth
   sx={{
     display: 'flex',
     fontFamily: 'Inter',
     width: '100%'
   }}
 >
   <Box sx={{ paddingLeft: '21px', paddingRight: '26px' }}>
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '2px',
        padding: '12px 20px 12px 20px',
        '& > *': {
          m: 1
        }
      }}
    >
      {options.map(option => (
        <Button
          key={option}
          onClick={() => onClick(option)}
          variant={selectedOption === option ? 'contained' : 'outlined'}
          sx={{
            height: '37px',
            border: '1px solid #036C03',
            borderRadius: '32px',
            gap: '10px',
            fontFamily: 'Inter',
            fontSize: '10px',
            textTransform: 'none'
          }}
          {...buttonProps}
        >
          {option}
        </Button>
      ))}
    </Box>
    </FormLabel>
    </Box>
    </FormControl>
  )
}

export { ButtonGroup }
