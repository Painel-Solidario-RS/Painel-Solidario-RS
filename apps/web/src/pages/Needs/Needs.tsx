import { Button, Grid } from '@mui/material'
import { DividerTextual } from '../../components/Divider/DividerTextual'
import SelectInput from '../../components/SelectInput/SelectInput'
import BasePage from '../../components/common/BasePage'
import { Card } from '../../components/Card/Card'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

type Priority = 'Emergencial' | 'Alta' | 'Média' | 'Baixa'

type CardData = {
  id: number
  title: string
  description: string
  requestDate: Date
  category: string
  priority: Priority
}

type ItemsProps = {
  key: string
  value: string
}
function Needs() {
  const navigate = useNavigate()
  const [cardsData, setCardsData] = useState<CardData[]>([
    {
      id: 1,
      title: 'Blusas Tamanho GG',
      description: '24 unidades',
      requestDate: new Date('2024-04-24T00:00:00'),
      category: 'Material',
      priority: 'Emergencial'
    },
    {
      id: 2,
      title: 'Calças Jeans',
      description: '18 unidades',
      requestDate: new Date('2024-04-24T00:00:00'),
      category: 'Material',
      priority: 'Baixa'
    },
    {
      id: 3,
      title: 'Blusas Tamanho GG',
      description: '24 unidades',
      requestDate: new Date('2024-04-24T00:00:00'),
      category: 'Material',
      priority: 'Média'
    },
    {
      id: 4,
      title: 'Blusas Tamanho GG',
      description: '24 unidades',
      requestDate: new Date('2024-04-24T00:00:00'),
      category: 'Material',
      priority: 'Alta'
    },
    {
      id: 5,
      title: 'Blusas Tamanho GG',
      description: '24 unidades',
      requestDate: new Date('2024-04-24T00:00:00'),
      category: 'Material',
      priority: 'Emergencial'
    },
    {
      id: 6,
      title: 'Blusas Tamanho GG',
      description: '24 unidades',
      requestDate: new Date('2024-04-24T00:00:00'),
      category: 'Material',
      priority: 'Emergencial'
    },
    {
      id: 7,
      title: 'Blusas Tamanho GG',
      description: '24 unidades',
      requestDate: new Date('2024-04-24T00:00:00'),
      category: 'Material',
      priority: 'Emergencial'
    },
    {
      id: 8,
      title: 'Blusas Tamanho GG',
      description: '24 unidades',
      requestDate: new Date('2024-04-24T00:00:00'),
      category: 'Material',
      priority: 'Emergencial'
    }
  ])

  const [shelterData, setShelterData] = useState<ItemsProps[]>([
    { key: '1', value: 'CTG ESTANCIA VELHA' },
    { key: '2', value: 'ABRIGO 2' },
    { key: '3', value: 'ABRIGO 3' }
  ])
  const navigateToEdit = (id: number) => {
    navigate(`/needs/edit/${id}`)
  }
  const goToAddNeeds = () => {
    navigate('/needs/add')
  }

  return (
    <BasePage leftIcon title="Cadastro de Necessidade">
      {/**ABAIXO - falta chamar o componente TextArea */}
      <div className="shelter-subtitle">Cadastro de Necessidade</div>
      <div>
        Insira as informações abaixo para cadastrar uma nova necessidade
      </div>
      {/**ACIMA - falta chamar o componente TextArea */}
      <DividerTextual title="Selecione o abrigo" />
      {/**falta FAZER AJUSTES */}
      <SelectInput label="Abrigo" placeholder="Selecione" items={shelterData} />

      <Button onClick={goToAddNeeds}>{'+Adicionar necessidade'}</Button>
      <DividerTextual title="Necesssidades cadastradas" />

      <Grid container spacing={1}>
        {cardsData.map(card => (
          <Grid key={card.id} item xs={12} sm={6} md={4} lg={3}>
            <Card
              title={card.title}
              description={card.description}
              requestDate={card.requestDate}
              category={card.category}
              priority={card.priority}
              onClick={() => navigateToEdit(card.id)}
            />
          </Grid>
        ))}
      </Grid>
    </BasePage>
  )
}

export { Needs }
