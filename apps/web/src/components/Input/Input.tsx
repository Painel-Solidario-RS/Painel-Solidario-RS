import {
  Box,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  InputBase,
  SxProps,
  FormHelperText,
} from "@mui/material";
import { JSXElementConstructor, ReactElement } from "react";

type InputProps = {
  type?: string;
  label: string;
  placeholder: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  icon?: ReactElement<string | JSXElementConstructor<string>> | undefined;
  sxInput?: SxProps | undefined;
};

const Input: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  name,
  value,
  onChange,
  error,
  helperText,
  icon,
  sxInput
}) => {
  return (
    <Box sx={{ width: "100%", ...sxInput }}>
      <FormControl
        sx={{
          display: "flex",
          fontFamily: "Inter",
          width: "100%",
        }}
        error={error}
      >
        <FormLabel
          sx={{
            fontSize: "12px",
            fontWeight: "700",
            lineHeight: "16px",
            textAlign: "left",
            height: "Hug (24px)",
            color: "#484649",
            paddingBottom: "8px",
            padding: "1px 1px 1px 1px ",
          }}
        >
          {label}
        </FormLabel>
        <InputBase
          id="outlined-multiline-flexible"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          sx={{
            padding: "0 16px",
            width: "100%",
            height: "48px",
            borderRadius: "8px",
            marginBottom: 1,
            display: "flex",
            alignItems: "center",
            lineHeight: "16px",
            justifyContent: "space-between",
            textTransform: "none",
            border: error ? "1px solid red" : "1px solid #aaacae",
          }}
          endAdornment={icon && (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="ícone"
                onClick={() => console.log("implementar")}
                className="green-color"
              >
                {icon}
              </IconButton>
            </InputAdornment>
          )}
        />
        {helperText && (
          <FormHelperText>{helperText}</FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};

export default Input;
