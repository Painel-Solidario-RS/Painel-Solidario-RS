import GreenButton from '../../components/GreenButton'
import WhiteButton from '../../components/WhiteButton'
import { useNavigate } from 'react-router-dom'
import BasePage from '../../components/common/BasePage'
import './shelter.css'
import Input from '../../components/Input/Input'
import {
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  SelectChangeEvent
} from '@mui/material'
import SelectInput from '../../components/SelectInput/SelectInput'
import { DividerTextual } from '../../components/Divider/DividerTextual'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import ButtonForm from '../../components/ButtonForm/ButtonForm'
import TextArea from '../../components/TextArea/TextArea'
import { useEffect, useState } from 'react'
import useApi from '../../hooks/useApi'

interface ItemsProps {
  key: string | number
  value: string
}

interface ShelterData {
  address: number
  name: string
  capacity: number
  contact: string
  type: 'PERSON' | 'PET'
}

function Shelter() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [totalCapacity, setTotalCapacity] = useState(0)
  const [placeTips, setPlaceTips] = useState<ItemsProps[]>([])
  const [selectedPlace, setSelectedPlace] = useState('')
  const [selectedPublic, setSelectedPublic] = useState('')

  const [submitData, setSubmitData] = useState<ShelterData | null>(null)
  const { response, error, loading } = useApi<ShelterData, ShelterData>({
    url: '/shelter',
    method: 'POST',
    body: submitData
  })

  const handleEnviarDadosDoAbrigo = () => {
    const shelterData: ShelterData = {
      address: 0,
      capacity: totalCapacity,
      contact: '',
      name: name,
      type: 'PERSON'
    }

    setSubmitData(shelterData)
  }

  const handleChangePlace = (event: SelectChangeEvent<string>) => {
    const selectedPlaceValue = event.target.value

    const selectedObject = placeTips.find(
      item => item.value === selectedPlaceValue
    )
    if (selectedObject) {
      setSelectedPlace(selectedPlaceValue)
    }
  }

  const handleChangePublic = (event: SelectChangeEvent<string>) => {
    const selectedPublicValue = event.target.value
    setSelectedPublic(selectedPublicValue)
  }
  const publicArray = [
    { key: '1', value: 'Publico 1' },
    { key: '2', value: 'Publico 2' },
    { key: '3', value: 'Publico 3' }
  ]

  const goToHome = () => {
    navigate('/home')
  }

  const stylesInput = {
    flexDirection: 'column',
    display: 'flex',
    flex: 1,
    padding: '8px',
    paddingLeft: '21px',
    height: '72px',
    gap: '8px'
  }
  return (
    <BasePage leftIcon title="Cadastro de Abrigo">
      <TextArea
        subtitle="Cadastro de Abrigos"
        description="Insira as informações abaixo para cadastrar um novo abrigo"
      />

      <DividerTextual title="Informações do abrigo" />
      <Box
        sx={{
          padding: '0px 12px 0px 12px',
          flexDirection: 'column',
          display: 'flex',
          flex: 1
        }}
      >
        {/* nome */}
        <Input
          name="name"
          onChange={e => setName(e.target.value)}
          value={name}
          label="Nome"
          placeholder="Nome e Sobrenome"
          sxInput={stylesInput}
        />

        <Box sx={{ ...stylesInput }}>
          <FormLabel
            sx={{
              padding: '0',
              gap: '0',
              fontSize: '12px',
              fontWeight: '700',
              lineHeight: '16px',
              textAlign: 'left',
              color: '#484649'
            }}
          >
            Tipo de abrigo
          </FormLabel>
        </Box>
        <Box sx={{ flex: 1 }}>
          <FormControl
            fullWidth
            sx={{
              fontFamily: 'Inter',
              paddingLeft: '21px',
              paddingRight: '26px',
              height: '128px',
              gap: '8px'
            }}
          >
            <ButtonForm
              content="Animais"
              icon={<Checkbox checked={true} onChange={() => ''} />}
            />
            <ButtonForm
              content="Pessoas"
              icon={<Checkbox checked={true} onChange={() => ''} />}
            />
          </FormControl>
        </Box>
        {/* publico alvo */}
        <SelectInput
          items={publicArray}
          label="Público-Alvo"
          placeholder="Selecione"
          sxSelectInput={stylesInput}
          value={selectedPublic}
          onChange={handleChangePublic}
        />
        {/* <Select/> */}
        {/* Telefone (Whatsapp) */}
        <Input
          label="Telefone (Whatsapp)"
          placeholder="(00) 00000-0000"
          sxInput={stylesInput}
        />
      </Box>

      <DividerTextual title="Endereço" />
      <div className=" shelter-info-fields">
        <Input
          label="CEP"
          placeholder="Selecione a UF"
          icon={<SearchSharpIcon />}
          sxInput={stylesInput}
        />
        {/* Tipo de logradouro */}
        <SelectInput
          items={placeTips}
          label="Tipo de logradouro"
          placeholder="Selecione"
          sxSelectInput={stylesInput}
          value={selectedPlace}
          onChange={handleChangePlace}
        />
        {/* Endereço (logradouro) */}
        <Input
          name="address"
          label="Endereço (logradouro)"
          placeholder="Ex. 7100000"
          sxInput={stylesInput}
        />
        {/* Número */}
        <Input
          label="Número"
          placeholder="Informe o número"
          sxInput={stylesInput}
        />
        {/* Complemento */}
        <Input
          label="Complemento"
          placeholder="Complemento"
          sxInput={stylesInput}
        />
        {/* Bairro */}
        <Input label="Bairro" placeholder="Bairro" sxInput={stylesInput} />
      </div>
      <DividerTextual title="Status de ocupação" />
      <div className="shelter-info-fields">
        {/* Capacidade Total */}
        <Input
          name="totalCapacity"
          label="Capacidade Total"
          placeholder="Quantidade de pessoas"
          sxInput={stylesInput}
          value={totalCapacity}
        />
        {/* Número de vagas disponíveis */}
        <Input
          label="Número de vagas disponíveis"
          placeholder="Voluntário Civil"
          sxInput={stylesInput}
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
          type="submit"
          onClick={handleEnviarDadosDoAbrigo}
          text="Cadastrar"
        />
      </div>
    </BasePage>
  )
}

export { Shelter }
