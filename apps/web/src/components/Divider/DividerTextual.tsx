import { Box, Divider } from '@mui/material'

type DividerProps = {
  title: string
}

const DividerTextual: React.FC<DividerProps> = ({ title }) => {
  return (
    <Divider
      className="bg-hard-light-gray dark-base-color"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: '14px',
        textAlign: 'left'
      }}
    >
      <Box sx={{ paddingLeft: '24px' }}>{title}</Box>
    </Divider>
  )
}

export { DividerTextual }
