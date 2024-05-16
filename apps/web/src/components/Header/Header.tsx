import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../../hooks/useAuth";

function Header() {
  const auth = useAuth();

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
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Container sx={{ textAlign: "left" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "300" }}
          >
            Ola, <b>{auth.user?.name}</b>
          </Typography>
          <Typography component="div" sx={{ flexGrow: 1, fontWeight: "300" }}>
            Voluntaria
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export { Header };
