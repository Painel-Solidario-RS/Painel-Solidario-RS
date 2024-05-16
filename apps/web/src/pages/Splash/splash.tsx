import FeevaleLogo from "../../assets/feevale-logo.svg";
import ProjectLogo from "../../assets/project-logo.svg";

import styles from "./splash.module.css";

function Splash() {
  return (
    <div className={styles.splash}>
      <img
        className={styles.projectLogo}
        src={ProjectLogo}
        alt="Logo do projeto"
      />
      <div className={styles.footer}>
        <img
          className={styles.feevaleLogo}
          src={FeevaleLogo}
          alt="Logo da Feevale"
        />
        <div className={styles.line} />
      </div>
    </div>
  );
}

export { Splash };
