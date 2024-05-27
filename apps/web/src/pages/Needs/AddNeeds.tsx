// AddNeeds.tsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Stack } from '@mui/material'
import GreenButton from '../../components/GreenButton'
import Input from '../../components/Input/Input'
import SelectInput from '../../components/SelectInput/SelectInput'
import WhiteButton from '../../components/WhiteButton'
import BasePage from '../../components/common/BasePage'
import { ButtonGroup } from '../../components/ButtonGroup/ButtonGroup'

type ItemsProps = {
  key: string
  value: string
}

function AddNeeds() {
  const navigate = useNavigate()
  const [selectedPriority, setSelectedPriority] = useState('')

  const handleButtonClick = (option: string) => {
    setSelectedPriority(option)
  }

  const categoryData: ItemsProps[] = [
    { key: '1', value: 'CTG ESTANCIA VELHA' },
    { key: '2', value: 'ABRIGO 2' },
    { key: '3', value: 'ABRIGO 3' }
  ]

  const unitsData: ItemsProps[] = [
    { key: '1', value: 'KG' },
    { key: '2', value: 'UN' },
    { key: '3', value: 'Litros' },
    { key: '4', value: 'Tamanho P' }
  ]

  const goToBack = () => {
    navigate(-1)
  }

  return (
    <BasePage title=" ">
      <div>Adicionar necessidades</div>
      <div>Insira as informações sobre a adoção</div>
      <br />
      <SelectInput
        label="Categoria (item)"
        placeholder="Selecione"
        items={categoryData}
      />
      <Input
        type="text"
        label="Descrição"
        placeholder="Ex. Camisas tamanho P"
      />
      <SelectInput
        label="Unidade de Medida"
        placeholder="Selecione"
        items={unitsData}
      />
      <Input type="text" label="Quantidade" placeholder="Ex. 21" />
      <ButtonGroup
        label="Prioridade"
        options={['Baixa', 'Média', 'Alta', 'Emergencial']}
        onClick={handleButtonClick}
        selectedOption={selectedPriority}
        buttonProps={{ color: 'primary' }}
      />
      <Stack direction="row" spacing={2} sx={{ padding: '16px' }}>
        <WhiteButton onClick={goToBack} text="Voltar" />
        <GreenButton onClick={goToBack} text="Cadastrar" />
      </Stack>
    </BasePage>
  )
}

export { AddNeeds }
