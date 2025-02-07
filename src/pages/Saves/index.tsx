import * as S from './styles'
import { dados } from "../../services/dados"
import { ComponentCard } from '../../components'

export function Saves() {
  return (
    <S.Section>
      {dados.map(item => (
        <ComponentCard
          key={item.id}
          data={item.data}
          jogo={item.jogo}
          fase={item.fase}
        />
      ))}
    </S.Section>
  )
}
