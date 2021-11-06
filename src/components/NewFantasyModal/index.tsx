import { FormEvent, useState } from 'react';
import Modal from 'react-modal'
import { api } from '../../services/api';
import { ContainerModal } from "./styles";

interface ModalProps{
  isOpen: boolean;
  onRequestClose: () => void
}

Modal.setAppElement('#root')

export function NewFantasyModal({isOpen, onRequestClose}: ModalProps){

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [measures, setMeasures] = useState('');
  const [days, setDays] = useState(0);

  async function handleSubmitNewFantasy(event: FormEvent){
    event.preventDefault();

    const data = {
      name, price, measures, days
    }
    
    await api.post('/fantasy',data)
  }

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modalClass"
      overlayClassName="overlayModal"
      >
      <ContainerModal
        onSubmit={handleSubmitNewFantasy}
      >
        <h2>Cadastrar nova fantasia</h2>
        <input type="text" name="name" placeholder="Nome" value={name} onChange={event=> setName(event.target.value)}/>
        <input type="text" name="measures" placeholder="Medidas(em altura)" value={measures} onChange={event=> setMeasures(event.target.value)}/>
        <input type="number" name="price" placeholder="Preço" value={price} onChange={event => setPrice(Number(event.target.value))}/>
        <input type="number" name="days" placeholder="Quantidade de dias" value={days} onChange={event => setDays(Number(event.target.value))}/>
        <button>
          Cadastrar fantasia
        </button>
      </ContainerModal>
    </Modal>
  )
}