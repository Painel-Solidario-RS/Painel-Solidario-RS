import { Button } from "@mui/material";

interface WhiteButtonProps {
    text?: string;
    onClick: () => void;
  }

 
const WhiteButton: React.FC<WhiteButtonProps> = ({text, onClick, ...props}) => {
    return (
        <Button className="white-background-color green-color" 
            sx={{
            display: 'flex',
            borderRadius: '25px',
            width: '100%',
            height: '50px',
            gap: '0px',
            opacity: '0px',
            fontSize: 'small'
          }}
          onClick={onClick} {...props}>
            {text}
        </Button>
    );
};

export default WhiteButton;
