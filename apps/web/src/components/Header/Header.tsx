import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/logout.svg";

function Header() {
  const auth = useAuth();

  const navigate = useNavigate();

  return (
    <AppBar
      sx={{
        top: 0,
        justifyContent: "center",
        background: "#006400",
        height: "80px",
      }}
      position="static"
    >
      <Toolbar>
        <Container sx={{ textAlign: "left" }}>
          <Typography component="div" sx={{ flexGrow: 1, fontWeight: "300" }}>
            Olá, <strong>{auth.user?.name}</strong>
          </Typography>
          <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
            Voluntário
          </Typography>
        </Container>
        <Button
          color="inherit"
          onClick={async () => {
            await auth.signOut();
            navigate("/");
          }}
        >
          <img src={LogoutIcon} alt="Logout" style={{ width: "25px" }} />
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export { Header };
