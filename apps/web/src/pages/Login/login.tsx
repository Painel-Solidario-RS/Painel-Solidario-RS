import { useFormik } from 'formik'
import * as Yup from 'yup'
import GreenButton from '../../components/GreenButton'
import { useNavigate } from 'react-router-dom'
import LoginImage from '../../assets/Login.svg'
import { Drawer, Grid, Link, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import './login.css'
import BasePage from '../../components/common/BasePage'
import Input from '../../components/Input/Input'
import { useAuth } from '../../hooks/useAuth'
import Forget from '../Forget/forget'

function Login() {
  const navigate = useNavigate()

  const users = useAuth()

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setIsDrawerOpen(true)
  }

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false)
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required')
    }),
    onSubmit: async values => {
      const token = await users.login(values.email, values.password)
      if (token) {
        navigate('/home')
      }
    }
  })

  return (
    <BasePage leftIcon title="Login">
      <div style={{ margin: '0 auto', width: '100vw' }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{
            width: '100vw',
            padding: '0 20px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          <Grid item xs={12} sm={6}>
            <div>
              <img src={LoginImage} alt="Login" className="login-image" />
            </div>
            <form onSubmit={formik.handleSubmit} className="container">
              <Typography variant="h6">Entrar</Typography>
              <Typography variant="body2">
                Realize o login na sua conta para acessar todos os serviços
                disponíveis.
              </Typography>
              <Input
                label="E-mail"
                name="email"
                placeholder="Insira seu e-mail"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email ? formik.errors.email : ''}
              />

              <TextField
                id="outlined-multiline-flexible"
                placeholder="Insira sua senha"
                sx={{
                  width: '100%',
                  borderRadius: '8px'
                }}
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                size="small"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={
                  formik.touched.password ? formik.errors.password : ''
                }
                InputProps={{
                  endAdornment: (
                    <Link
                      href={'esqueceu'}
                      onClick={handleLinkClick}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                      sx={{
                        fontSize: '12px',
                        color: '#0070D1'
                      }}
                    >
                      Esqueceu?
                    </Link>
                  )
                }}
              />

              <Drawer
                anchor="bottom"
                open={isDrawerOpen}
                onClose={handleCloseDrawer}
              >
                <div style={{ width: 250 }}>
                  <Forget onCloseDrawer={handleCloseDrawer} />
                </div>
              </Drawer>
              <GreenButton type="submit" text="Entrar" />
            </form>
          </Grid>
        </Grid>
      </div>
    </BasePage>
  )
}

export { Login }
