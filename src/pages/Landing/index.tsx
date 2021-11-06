import { FiArrowRight } from 'react-icons/fi'
import { Container, ContentWrapper } from './styles'
import imgLogo from '../../images/jason.svg'

export function Landing(){
  return(
    <Container>
      <ContentWrapper>
        <main>
          <span>🦇 Hey,bem vindo!</span>
          <h1>HappyWeen, tudo sobre <span>fantasias</span> da época mais assustadora do ano</h1>
          <p>Plataforma ideal para você que está sem ideia <br/>
             para criação de <span>fantasias para o halloween</span> e quer alugar uma</p>

          <div className="container-buttons">
            <button>
              <a href="/content">
                <FiArrowRight color="#121214"/>
                Cadastrar fantasia
              </a>
            </button>

            <button>
              <a href="">
                <FiArrowRight color="#121214"/>
                Alugar fantasia
              </a>
            </button>
          </div>
        </main>

      </ContentWrapper>
      <img src={imgLogo} alt="logo" className="imagem-logo"/>
    </Container>
  );
}