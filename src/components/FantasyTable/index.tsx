import { useContext } from 'react'
import { FantasyContext } from '../../FantasyProvider'
import { Container } from './styles'

export function FantasyTable(){

 const fantasies = useContext(FantasyContext);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome da fantasia</th>
            <th>Medidas(em altura)</th>
            <th>Preço do aluguel</th>
            <th>Quantidade dias</th>
          </tr>
        </thead>

        <tbody>
         {fantasies.map(fantasy => (
          <tr key={fantasy.id}>
            <td>{fantasy.name}</td>
            <td>{fantasy.measures}</td>
            <td>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(fantasy.price)}</td>
            <td>{fantasy.days}</td>
          </tr>
         ))}
        </tbody>
      </table>
    </Container>
  )
}