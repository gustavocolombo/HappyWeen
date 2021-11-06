import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Container, ContentContainer } from "./styles";
import { NewFantasyModal } from "../NewFantasyModal";

export function Header(){

  const [gretting, setGretting] = useState('');
  const [newFantasyModal, setNewFantasyModal] = useState(false);

  function handleSetModalOpen(){
    setNewFantasyModal(true);
  }

  function handleSetModalClosed(){
    setNewFantasyModal(false);
  }

  useEffect(()=>{
    const date = new Date().getHours();
    if(date < 12){
      setGretting('Bom dia!')
    }else if(date > 12 && date < 18){
      setGretting('Boa tarde!')
    }else{
      setGretting('Boa noite!')
    }
  },[])

  return(
    <Container>
      <ContentContainer>
        <span>{gretting}</span>

        <button onClick={handleSetModalOpen}>
          <FiPlus/>
          Criar nova fantasia
        </button>

        <NewFantasyModal
          isOpen={newFantasyModal} 
          onRequestClose={handleSetModalClosed}
        />
      </ContentContainer>
    </Container>
  )
}