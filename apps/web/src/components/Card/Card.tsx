import MuiCard from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import health from '../../assets/health.svg'
import CircleSharpIcon from '@mui/icons-material/CircleSharp'

type Priority = 'Emergencial' | 'Alta' | 'Média' | 'Baixa'

interface CardProps {
  /** The text to display inside the button */
  title: string
  description: string
  requestDate: Date
  category: string
  priority: Priority
  onClick: () => void
  /** Whether the button can be interacted with */
}

function Card({
  title,
  description,
  requestDate,
  category,
  priority,
  onClick
}: CardProps) {
  const priorityColorMap: Record<Priority, string> = {
    Emergencial: '#E05353',
    Alta: '#FFA500',
    Média: '#4CAF50',
    Baixa: '#4CFF50'
  }

  const formattedDate =
    requestDate instanceof Date
      ? requestDate.toLocaleDateString()
      : 'Invalid Date'

  return (
    <Box sx={{ padding: '8px 8px 0px 30px' }}>
      <MuiCard
        sx={{
          width: '327px',
          height: '120px',
          borderRadius: '.8rem',
          border: '1px solid #D3D3D3',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adicionando boxShadow
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Alterando boxShadow no hover
            cursor: 'pointer'
          }
        }}
        variant="outlined"
        onClick={onClick}
      >
        <>
          <CardContent
            className="card"
            sx={{
              padding: '0px',
              textAlign: 'left',
              gap: '4px',
              height: '40px',
              backgroundColor: '#EDEDED',
              borderTopLeftRadius: '.8rem',
              borderTopRightRadius: '.8rem',
              display: 'flex',
              flexDirection: 'column', // Organiza os itens em coluna
              justifyContent: 'space-between',
              boxShadow: 'inherit'
              // Alinha os itens no espaçamento entre
            }}
          >
            <Container
              sx={{
                paddingTop: '10px',
                paddingLeft: '10px',
                paddingBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between', // Ensures items are spaced between
                gap: '0px',
                borderRadius: '8px 8px 0px 0px',
                opacity: 1, // Setting opacity to 1 as opacity 0 will hide the container
                backgroundColor: '#F0F0F0' // Same background color for consistency
              }}
            >
              <Container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px' // Adiciona um espaço entre os elementos
                }}
              >
                <Typography
                  variant="body1"
                  color="#565656"
                  sx={{ padding: '0px' }}
                >
                  <b>{title}</b>
                </Typography>
                <Typography
                  variant="body2"
                  color="#565656"
                  sx={{ padding: '0px', fontSize: '12px' }}
                >
                  {description}
                </Typography>
              </Container>
              <ArrowForwardIosIcon
                sx={{ height: '24px', width: '24px', color: '#565656' }}
              />
            </Container>
          </CardContent>
          <CardContent
            sx={{
              paddingRight: '0px',
              padding: '8px',
              textAlign: 'center',
              borderRadius: '0px 0px 4px 4px'
              // Alinha os itens no espaçamento entre
            }}
          >
            <Container
              sx={{
                width: '100%',
                height: '100px',
                padding: '0px 0px 4px 0px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Container
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 10px',
                  height: '24px'
                }}
              >
                <CalendarMonthIcon
                  sx={{
                    padding: '4px',
                    height: '16px',
                    width: '16px',
                    color: '#565656'
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: '10px',
                    padding: '6px 0px 0px 0px'
                  }}
                >
                  {formattedDate}
                </Typography>
              </Container>

              <Container
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: '24px',
                  alignItems: 'center',
                  padding: '0px'
                }}
              >
                <Box
                  sx={{
                    height: '16px',
                    width: '16px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <img
                    src={health}
                    alt=""
                    style={{ height: '100%', width: '100%' }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: '10px',
                    padding: '8px 0px 8px 4px'
                  }}
                >
                  {category}
                </Typography>
              </Container>
              <Container
                sx={{
                  padding: '0px',
                  display: 'flex',
                  flexDirection: 'row',
                  height: '20px'
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: '12px',
                    padding: '0px'
                  }}
                >
                  <CircleSharpIcon
                    sx={{
                      padding: '0px 4px 0px 0px',
                      fontSize: '12px',
                      width: '8px',
                      height: '8px',
                      color: priorityColorMap[priority]
                    }}
                  />
                  {priority}
                </Typography>
              </Container>
            </Container>
          </CardContent>
        </>
      </MuiCard>
    </Box>
  )
}

export { Card }
