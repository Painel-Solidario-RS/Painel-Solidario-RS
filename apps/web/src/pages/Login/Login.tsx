import LoginImage from "../../assets/Login.svg";
import { Button, Typography } from "@mui/material";
import styles from "./Login.module.css";
import Input from "../../components/Input/Input";
import { Google as GoogleIcon, Facebook as FacebookIcon } from "@mui/icons-material";
import { useLogin } from "./Login.hook";
import { Navbar } from "../../components/Navbar";

function Login() {
  const login = useLogin();

  return (
    <div className={styles.page}>
      <Navbar title="Login" />
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={LoginImage} alt="Login" />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const email = (e.target as HTMLFormElement).email.value;
            const password = (e.target as HTMLFormElement).password.value;
            login.signInWithEmailAndPassword(email, password);
          }}
          className={styles.form}
        >
          <Typography variant="h6" style={{ width: "100%", textAlign: "left" }}>
            Entrar
          </Typography>
          <Typography variant="body2">
            Realize o login na sua conta para acessar todos os serviços disponíveis.
          </Typography>
          <Button
            variant="outlined"
            fullWidth
            style={{
              backgroundColor: "#4285f4",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
            onClick={login.signInWithGoogle}
          >
            <GoogleIcon />
            Entrar com Google
          </Button>
          <Button
            variant="outlined"
            fullWidth
            style={{
              backgroundColor: "#3b5998",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
            onClick={login.signInWithFacebook}
          >
            <FacebookIcon />
            Entrar com Facebook
          </Button>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>ou</div>

          <Input type="email" label="E-mail" name="email" placeholder="Insira seu e-mail" />

          <Input type="password" label="Senha" name="password" placeholder="Insira sua senha" />

          <Button
            variant="text"
            fullWidth
            style={{ color: "#4285f4", textAlign: "right" }}
            onClick={() => {
              console.log("Esqueci minha senha");
            }}
          >
            Esqueci minha senha
          </Button>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}

export { Login };
