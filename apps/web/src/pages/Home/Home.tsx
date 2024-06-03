import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { Container, Grid } from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import NightShelterIcon from "@mui/icons-material/NightShelter";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import FeedIcon from "@mui/icons-material/Feed";

const menuItems = [
  {
    title: "Doações",
    description: "Saiba como pode ajudar",
    icon: (
      <VolunteerActivismIcon
        sx={{
          fontSize: "1.5rem",
          color: (theme) => theme.palette.primary.main,
        }}
      />
    ),
  },
  {
    title: "Abrigos",
    description: "Veja a situação de cada abrigo",
    icon: (
      <NightShelterIcon
        sx={{
          fontSize: "1.5rem",
          color: (theme) => theme.palette.primary.main,
        }}
      />
    ),
  },
  {
    title: "Pontos de coleta",
    description: "Encontre o local mais próximo para entregar doações",
    icon: (
      <HelpOutlinedIcon
        sx={{
          fontSize: "1.5rem",
          color: (theme) => theme.palette.primary.main,
        }}
      />
    ),
  },
  {
    title: "Gestão",
    description: "Cadastrar abrigos e gerenciar elementos",
    icon: <FeedIcon sx={{ fontSize: "1.5rem", color: "#006400" }} />,
  },
];

function Home() {
  return (
    <div>
      <Header />
      <Container
        style={{
          padding: "20px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <Grid
          container
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
            justifyItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
          spacing={2}
        >
          {menuItems.map((item, index) => (
            <Grid item key={index}>
              <Card
                title={item.title}
                description={item.description}
                size={170}
                icon={item.icon}
                onClick={function (): void {
                  console.log("Function not implemented.");
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export { Home };
