import { SSection } from "./styles";
export interface ICard {
  data: string
  jogo: string
  fase: string
}
export const Card = ({ data, jogo, fase }: ICard) => {
  return (
    <SSection>
      <aside>
        <h5>Data:</h5>
        <p>{data}</p>
      </aside>
      <aside>
        <h5>Jogo:</h5>
        <p>{jogo}</p>
      </aside>
      <aside>
        <h5>Fase:</h5>
        <p>{fase}</p>
      </aside>
    </SSection>
  );
};
