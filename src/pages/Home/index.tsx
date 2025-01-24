import { Section } from './styles'
import img1 from "../../assets/image1.png"

export function Home() {
  return (
    <Section>
      <img src={img1} alt="Imagem no centro" />
    </Section>
  )
}
