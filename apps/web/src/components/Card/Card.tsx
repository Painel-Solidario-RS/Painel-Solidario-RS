import MuiCard from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

interface CardProps {
  /** The text to display inside the button */
  size: number;
  icon: JSX.Element;
  title: string;
  description: string;
  onClick: () => void;
  /** Whether the button can be interacted with */
}

function Card({ size, icon, title, description, onClick }: CardProps) {
  return (
    <div>
      <Box sx={{ padding: "10px" }}>
        <MuiCard
          sx={{
            width: size,
            height: "10rem",
            borderRadius: ".8rem",
            border: "1px solid #D3D3D3",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              cursor: "pointer",
            },
          }}
          variant="outlined"
          onClick={onClick}
        >
          <>
            <CardContent
              className="card"
              sx={{
                padding: "1rem",
                textAlign: "left",
              }}
            >
              <Container
                sx={{
                  borderRadius: "50%",
                  padding: "5px !important",
                  width: "fit-content",
                  display: "flex",
                  margin: "0",
                  border: "1px solid #D3D3D3",
                }}
              >
                {icon}
              </Container>
              <Typography
                sx={{ marginTop: ".5rem" }}
                variant="body1"
                component="div"
              >
                <b>{title}</b>
              </Typography>
              <Typography
                sx={{ marginTop: ".5rem" }}
                variant="body2"
                color="text.secondary"
              >
                {description}
              </Typography>
            </CardContent>
          </>
        </MuiCard>
      </Box>
    </div>
  );
}

export { Card };
