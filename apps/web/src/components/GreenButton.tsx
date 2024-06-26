import { Button } from "@mui/material";

interface GreenButtonProps {
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

 
const GreenButton: React.FC<GreenButtonProps> = ({
  text,
  onClick,
  ...props
}) => {
  return (
    <Button
      className="green-background-color white-color"
      sx={{
        borderRadius: "25px",
        width: "100%",
        gap: "0px",
        opacity: "0px",
        fontSize: "small",
      }}
      onClick={onClick}
      {...props}
    >
      {text}
    </Button>
  );
};

export default GreenButton;
