import { Container } from './styles'
import imgJson from '../../images/jason.svg';
import imgPenny from '../../images/penny.svg';
import imgMumia from '../../images/mumia.svg'

export function Summary(){
  return(
    <Container>
      <div>
        <header>
          <img src={imgMumia} alt="mumia" />
          <span>Fantasia de Múmia</span>
        </header>
        <strong>R$ 150,00</strong>
      </div>

      <div>
        <header>
          <img src={imgPenny} alt="pennywise" />
          <span>Fantasia de Palhaço</span>
        </header>
        <strong>R$ 100,00</strong>
      </div>

      <div>
        <header>
          <img src={imgJson} alt="jason" />
          <span>Fantasia Filme de Terror</span>
        </header>
        <strong>R$200,00</strong>
      </div>
    </Container>
  )
}