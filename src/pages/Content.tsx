import { FantasyTable } from "../components/FantasyTable";
import { Header } from "../components/Header";
import { Summary } from "../components/Summary";
import { Container } from "./styles";

export function Content(){
  return(
    <Container>
      <Header/>
      <Summary/>
      <FantasyTable/>
    </Container>
  );
}