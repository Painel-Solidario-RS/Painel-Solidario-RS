import {
  Box,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface ItemsProps {
  key: string | number
  value: string
}

interface SelectInputProps {
  label?: string
  placeholder?: string
  items?: ItemsProps[]
  sxSelectInput?: SxProps
  value: string
  onChange?: (event: SelectChangeEvent<string>) => void | undefined
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  placeholder,
  items = [],
  sxSelectInput,
  value,
  onChange
}) => {
  return (
    <Box sx={sxSelectInput}>
      <FormControl
        fullWidth
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
            height: '24px'
          }}
        >
          {label}
        </FormLabel>
        <Select
          placeholder={placeholder}
          sx={{
            width: '328px',
            height: '48px',
            borderRadius: '8px',
            display: 'flex',
            border: '1px solid #aaacae'
          }}
          value={value}
          onChange={onChange}
          IconComponent={props => (
            <ExpandMoreIcon {...props} fontSize="large" variant="Filled" />
          )}
        >
          <MenuItem disabled>{placeholder}</MenuItem>
          {items.map(item => (
            <MenuItem key={item.key} value={item.value}>
              {item.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
export default SelectInput
