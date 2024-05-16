import { FormControl, FormLabel, MenuItem, Select } from "@mui/material"



interface ItemsProps {
    key: string | number,
    value: string,
}

interface SelectInputProps {
    label?: string
    placeholder?: string
    items?: ItemsProps[] 
}

const SelectInput: React.FC<SelectInputProps> = ({ label, placeholder, items=[] }) => {
    return (
    <FormControl fullWidth>
        <FormLabel
            sx={{
                fontSize: '12px',
                fontWeight: '500',
                lineHeight: '16px',
                textAlign: 'left',
                height: 'Hug (24px)',
                color: '#484649',
                display: 'flex',
                flexDirection: "column",
                margin: '1px 1px 10px 1px'
            }}
        >
            {label}
            <Select
                placeholder={placeholder}
                value={1}
                onChange={() => ''}
                >
                <MenuItem value={1.0} key={0}>{placeholder}</MenuItem>
                { 
                    items.map((item)=> {
                        return <MenuItem value={10} key={item.key}>{item.value}</MenuItem>
                    })
                }
            </Select>
        </FormLabel>
    </FormControl>
    )
}
export default SelectInput;
