import { useNavigate } from 'react-router-dom'
import GreenButton from '../../components/GreenButton'
import Input from '../../components/Input/Input'
import SelectInput from '../../components/SelectInput/SelectInput'
import WhiteButton from '../../components/WhiteButton'
import BasePage from '../../components/common/BasePage'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { ButtonGroup } from '../../components/ButtonGroup/ButtonGroup'

type ItemsProps = {
  key: string
  value: string
}
function EditNeeds() {
  const navigate = useNavigate()
  const [mode, setMode] = useState<'edit' | 'delete'>('edit')

  const [categoryData, setCategoryData] = useState<ItemsProps[]>([
    { key: '1', value: 'CTG ESTANCIA VELHA' },
    { key: '2', value: 'ABRIGO 2' },
    { key: '3', value: 'ABRIGO 3' }
  ])
  const [unitsData, setUnitsData] = useState<ItemsProps[]>([
    { key: '1', value: 'KG' },
    { key: '2', value: 'UN' },
    { key: '3', value: 'Litros' },
    { key: '4', value: 'Tamanho P' }
  ])

  const [selectedPriority, setSelectedPriority] = useState('')

  const handleButtonClick = (option: string) => {
    setSelectedPriority(option)
  }

  const handleAction = () => {
    if (mode === 'edit') {
      // Handle edit action
      console.log('Editing item')
    } else if (mode === 'delete') {
      // Handle delete action
      console.log('Deleting item')
    }
  }

  const goToBack = () => {
    navigate(-1)
  }
  return (
    <BasePage title=" ">
      <div>Ajustar necessidade</div>
      <div>Edite ou exclua a necessidade cadastrada</div>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
        <Button
          variant={mode === 'edit' ? 'contained' : 'outlined'}
          onClick={() => setMode('edit')}
        >
          Editar
        </Button>
        <Button
          variant={mode === 'delete' ? 'contained' : 'outlined'}
          onClick={() => setMode('delete')}
        >
          Excluir
        </Button>
      </Box>
      {mode === 'edit' ? (
        <>
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
        </>
      ) : (
        <>
          <Box
            sx={{
              fontFamily: 'Inter',
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '24px 16px 24px 16px'
            }}
          >
            <Typography
              className="dark-base-color"
              sx={{
                fontSize: '20px',
                fontWeight: 'bold'
              }}
            >
              Atenção!
              <Typography
                sx={{
                  fontSize: '16px'
                }}
              >
                Ao clicar na opção excluir a necessidade +
                <b>{'24 unidade de Blusa GG'}</b>+ será excluido
                definitivamente, deseja excluir a necessidade?
              </Typography>
            </Typography>
          </Box>
        </>
      )}
      <Stack direction="row" spacing={2} sx={{ padding: '16px' }}>
        <WhiteButton onClick={goToBack} text="Voltar" />
        <GreenButton
          onClick={handleAction}
          text={mode === 'edit' ? 'Editar' : 'Excluir'}
        />
      </Stack>
    </BasePage>
  )
}

export { EditNeeds }
