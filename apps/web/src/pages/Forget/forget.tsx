import { Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Input from '../../components/Input'
import GreenButton from '../../components/GreenButton'
import WhiteButton from '../../components/WhiteButton'

type ForgetProps = {
  onCloseDrawer: () => void
}

function Forget({ onCloseDrawer }: ForgetProps) {
  const navigate = useNavigate()
  const [buttonText, setButtonText] = useState('Seguir')

  const goToHome = () => {
    navigate('/login')
  }
  const buttonSend = () => {
    setButtonText('Enviar')
  }
  const buttonSave = () => {
    setButtonText('Salvar')
  }
  const recoveredPassword = () => {
    onCloseDrawer()
  }

  return (
    <div style={{ margin: '0 auto', width: '100vw' }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{
          width: '100vw',
          padding: '40px 20px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}
      >
        <form className="container">
          <Typography variant="h6">Esqueci a senha</Typography>
          <Typography variant="body2">
            Siga os próximos passos para recuperar sua senha
          </Typography>
          {buttonText == 'Seguir' && (
            <Input
              label={'Qual o seu número de telefone?'}
              placeholder={'(00)00000-0000'}
            />
          )}
          {buttonText == 'Enviar' && (
            <Input label={'Insira o código recebido'} placeholder={'00000'} />
          )}
          {buttonText == 'Salvar' && (
            <Input label={'Insira a nova senha'} placeholder={'***********'} />
          )}
          {buttonText == 'Seguir' && (
            <Typography variant="body2">
              Você receberá um código para seguir com a alteração de forma
              segura.
            </Typography>
          )}

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '0px 12px 0px 12px'
            }}
          >
            <WhiteButton
              onClick={() => {
                goToHome()
              }}
              text="Voltar"
            />
            {buttonText == 'Seguir' && (
              <GreenButton
                onClick={() => {
                  buttonSend()
                }}
                text={buttonText}
              />
            )}
            {buttonText == 'Enviar' && (
              <GreenButton
                onClick={() => {
                  buttonSave()
                }}
                text={buttonText}
              />
            )}
            {buttonText == 'Salvar' && (
              <GreenButton
                onClick={() => {
                  recoveredPassword()
                }}
                text={buttonText}
              />
            )}
          </div>
        </form>
      </Grid>
    </div>
  )
}

export default Forget
