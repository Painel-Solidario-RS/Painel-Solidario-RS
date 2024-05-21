import { Box, FormControl, FormLabel, MenuItem, Select } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface ItemsProps {
  key: string | number
  value: string
}

interface SelectInputProps {
  label?: string
  placeholder?: string
  items?: ItemsProps[]
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  placeholder,
  items = []
}) => {
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
          <Select
            id="outlined-multiline-flexible"
            placeholder={placeholder}
            sx={{
              paddingTop: '0px',
              width: '100%',
              height: '48px',
              borderRadius: '8px',
              marginBottom: 1
            }}
            value={1}
            onChange={() => ''}
            IconComponent={props => (
              <ExpandMoreIcon {...props} fontSize="large" variant="Filled" />
            )}
          >
            <MenuItem value={1.0} key={0}>
              {placeholder}
            </MenuItem>
            {items.map(item => {
              return (
                <MenuItem value={10} key={item.key}>
                  {item.value}
                </MenuItem>
              )
            })}
          </Select>
        </FormLabel>
      </Box>
    </FormControl>
  )
}
export default SelectInput
