import RegisterImage from "../../assets/Login.svg";
import { Button, Typography } from "@mui/material";
import styles from "./Register.module.css";
import Input from "../../components/Input";
import { Google as GoogleIcon, Facebook as FacebookIcon } from "@mui/icons-material";
import { useRegister } from "./Register.hook";
import { Navbar } from "../../components/Navbar";

function Register() {
  const register = useRegister();

  return (
    <div className={styles.page}>
      <Navbar title="Cadastro" />
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={RegisterImage} alt="Register" />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const email = (e.target as HTMLFormElement).email.value;
            const password = (e.target as HTMLFormElement).password.value;
            register.signUpWithEmailAndPassword(email, password);
          }}
          className={styles.form}
        >
          <Typography variant="h6" style={{ width: "100%", textAlign: "left" }}>
            Cadastrar
          </Typography>
          <Typography variant="body2">
            Realize o cadastro da sua conta para acessar todos os serviços disponíveis.
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
            onClick={register.signInWithGoogle}
          >
            <GoogleIcon />
            Cadastrar com Google
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
            onClick={register.signInWithFacebook}
          >
            <FacebookIcon />
            Cadastrar com Facebook
          </Button>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>ou</div>

          <Input type="email" label="E-mail" name="email" placeholder="Insira seu e-mail" />

          <Input type="password" label="Senha" name="password" placeholder="Insira sua senha" />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
  );
}

export { Register };
