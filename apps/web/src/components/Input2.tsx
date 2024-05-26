import { FormControl, FormLabel, TextField } from "@mui/material";

type InputProps = {
  label: string;
  placeholder: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
};

const Input2: React.FC<InputProps> = (props: InputProps) => {
  const { label, placeholder, type, name, value, onChange ,error, helperText} = props;

  return (
    <FormControl
      sx={{
        width: "100%",
      }}
    >
      <FormLabel
        sx={{
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        {label}
        <TextField
          id="outlined-multiline-flexible"
          placeholder={placeholder}
          sx={{
            width: "100%",
            borderRadius: "8px",
          }}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          size="small"
          error={error}
          helperText={helperText}
        />
      </FormLabel>
    </FormControl>
  );
};

export default Input2;