import { Box, Typography } from '@mui/material'

type TextAreaProps = {
  subtitle: string
  description: string
}

const TextArea: React.FC<TextAreaProps> = ({ subtitle, description }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        fontFamily: 'Rawline',
        fontSize: '16px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '16px',
        padding: '12px'
      }}
    >
      <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
        {subtitle}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Roboto',
          fontSize: '16px',
          textAlign: 'left',
          lineHeight: '24px'
        }}
      >
        {description}
      </Typography>
    </Box>
  )
}

export default TextArea
