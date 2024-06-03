import { Typography } from "@mui/material";
import BackArrowHeader from "../icons/BackArrowHeader";
import styles from "./Navbar.module.css";
import { useNavigate } from 'react-router-dom';

type NavbarProps = {
  title: string;
};

export const Navbar = ({ title }: NavbarProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.icon} onClick={handleBackClick} style={{ cursor: "pointer" }}>
        <BackArrowHeader />
      </div>
      <Typography variant="h6" className={styles.title}>
        {title}
      </Typography>
    </div>
  );
};
