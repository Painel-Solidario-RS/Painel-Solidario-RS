import { Card } from '../../components/Card/Card'
import { Header } from '../../components/Header/Header'
import { Container, Grid } from '@mui/material'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import NightShelterIcon from '@mui/icons-material/NightShelter'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import FeedIcon from '@mui/icons-material/Feed'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <Header></Header>
      <Container sx={{ marginTop: '10px', padding: '0' }}>
        <Grid sx={{ flexGrow: 1 }} container justifyContent="center">
          <Grid item>
            <Card
              title="Doações"
              description="Saiba como pode ajudar"
              size={170}
              icon={
                <VolunteerActivismIcon
                  sx={{
                    fontSize: '1.5rem',
                    color: theme => theme.palette.primary.main
                  }}
                />
              }
              onClick={function (): void {
                console.log('Function not implemented.')
              }}
            />
          </Grid>
          <Grid item>
            <Card
              title="Abrigos"
              description="Veja a situação de cada abrigo"
              size={170}
              icon={
                <NightShelterIcon
                  sx={{
                    fontSize: '1.5rem',
                    color: theme => theme.palette.primary.main
                  }}
                />
              }
              onClick={function (): void {
                console.log('Function not implemented.')
              }}
            />
          </Grid>
          <Grid item>
            <Card
              title="Pontos de coleta"
              description="Encontre o local mais próximo para entregar doações"
              size={170}
              icon={
                <HelpOutlinedIcon
                  sx={{
                    fontSize: '1.5rem',
                    color: theme => theme.palette.primary.main
                  }}
                />
              }
              onClick={function (): void {
                console.log('Function not implemented.')
              }}
            />
          </Grid>
          <Grid item>
            <Card
              title="Gestão"
              description="Cadastrar abrigos e gerenciar elementos"
              size={170}
              icon={<FeedIcon sx={{ fontSize: '1.5rem', color: '#006400' }} />}
              onClick={function (): void {
                navigate('/shelter')
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export { Home }
