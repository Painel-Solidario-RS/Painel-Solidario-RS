import WelcomeImage from "../../assets/map.png";
import { Button, Typography } from "@mui/material";
import styles from "./Welcome.module.css";
import { useWelcome } from "./Welcome.hook";

function Welcome() {
  const welcome = useWelcome();

  return (
    <div className={styles.page}>
      <div className={styles.image}>
        <img src={WelcomeImage} alt="Welcome" />
        <div></div>
      </div>
      <div className={styles.container}>
        <div className={styles.menu}>
          <section>
            <Typography variant="h6" style={{ width: "100%", textAlign: "left", color: "#000000" }}>
              Olá, esse é o
            </Typography>
            <Typography variant="h5" style={{ width: "100%", textAlign: "left" }}>
              Painel Solidário RS!
            </Typography>
          </section>
          <section>
            <Button
              variant="outlined"
              fullWidth
              size="large"
              style={{
                borderRadius: 20,
              }}
              onClick={welcome.signUp}
            >
              Cadastrar
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              style={{ borderRadius: 20 }}
              onClick={welcome.signIn}
            >
              Entrar
            </Button>
          </section>
          <div className={styles.services}>
            <Typography
              variant="h6"
              style={{ width: "100%", textAlign: "left", marginTop: 20, marginBottom: 20 }}
            >
              Serviços abertos
            </Typography>
            <div className={styles.items}>
              {welcome.services.map((service) => (
                <div className={styles.item}>
                  <img src={service.image} alt={service.title} />
                  <span>{service.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Welcome };
