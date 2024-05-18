import GreenButton from '../../components/GreenButton'
import WhiteButton from '../../components/WhiteButton'
import { useNavigate } from 'react-router-dom'
import BasePage from '../../components/common/BasePage'
import './shelter.css'
import Input from '../../components/Input/Input'
import { Checkbox, FormControl, FormLabel } from '@mui/material'
import SelectInput from '../../components/SelectInput/SelectInput'
import { DividerTextual } from '../../components/Divider/DividerTextual'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
function Shelter() {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/home')
  }

  return (
    <BasePage leftIcon title="Cadastro de Abrigo">
      <div className="shelter-header">
        <div className="shelter-subtitle">Cadastro de Abrigo</div>
        <div className="shelter-title-description">
          Insira as informações abaixo para cadastrar um novo abrigo
        </div>
      </div>
      <div className="shelter-info">
        <DividerTextual title="Informações do abrigo" />
        <div className="shelter-info-fields">
          {/* nome */}
          <div className="shelter-flex">
            <Input label="Nome" placeholder="Nome e Sobrenome" />
          </div>

          <div className="shelter-type-container">
            <p>Tipo de abrigo</p>
            <div className="shelter-type">
              <FormControl
                fullWidth
                sx={{
                  display: 'flex',
                  fontFamily: 'Inter',
                  width: '100%'
                }}
              >
                <FormLabel>
                  <Input
                    type="button"
                    label={'Animais'}
                    placeholder={''}
                    icon={<Checkbox checked={true} onChange={() => ''} />}
                  />
                </FormLabel>
                <FormLabel>
                  <Input
                    type="button"
                    icon={<Checkbox checked={true} onChange={() => ''} />}
                    label={'Pessoas'}
                    placeholder={''}
                  />
                </FormLabel>
              </FormControl>
            </div>
          </div>
          {/* publico alvo */}
          <SelectInput
            items={[
              { key: '1', value: 'Publico 1' },
              { key: '2', value: 'Publico 2' },
              { key: '3', value: 'Publico 3' }
            ]}
            label="Público-Alvo"
            placeholder="Selecione"
          />
          {/* <Select/> */}
          {/* Telefone (Whatsapp) */}
          <Input label="Telefone (Whatsapp)" placeholder="(00) 00000-0000" />
        </div>

        <DividerTextual title="Endereço" />
        <div className=" shelter-info-fields">
          <Input
            label="CEP"
            placeholder="Selecione a UF"
            icon={<SearchSharpIcon />}
          />
          {/* Tipo de logradouro */}
          <SelectInput
            items={[
              { key: '1', value: 'TIPO 1' },
              { key: '2', value: 'TIPO 2' },
              { key: '3', value: 'TIPO 3' }
            ]}
            label="Tipo de logradouro"
            placeholder="Selecione"
          />

          {/* Endereço (logradouro) */}
          <Input label="Endereço (logradouro)" placeholder="Ex. 7100000" />
          {/* Número */}
          <Input label="Número" placeholder="Informe o número" />
          {/* Complemento */}
          <Input label="Complemento" placeholder="Complemento" />
          {/* Bairro */}
          <Input label="Bairro" placeholder="Bairro" />
        </div>
        <DividerTextual title="Status de ocupação" />
        <div className="shelter-info-fields">
          {/* Capacidade Total */}
          <Input label="Capacidade Total" placeholder="Quantidade de pessoas" />
          {/* Número de vagas disponíveis */}
          <Input
            label="Número de vagas disponíveis"
            placeholder="Voluntário Civil"
          />
        </div>
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
          <GreenButton
            onClick={() => {
              goToHome()
            }}
            text="Cadastrar"
          />
        </div>
      </div>
    </BasePage>
  )
}

export { Shelter }
