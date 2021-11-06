import styled from "styled-components";

export const ContainerModal = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  h2{
    margin-bottom: 1rem ;
  }

  input{
    border: 1px solid #d7d7d7;
    border-radius: 0.3rem;
    width: 100%;
    padding: 1rem 1rem;

    & + input{
      margin-top: 1rem;
    }
  }

  button{
    margin-top: 1rem;
    width: 100%;
    border: 0;
    border-radius: 0.3rem;
    background: var(--purple-500);
    padding: 1rem 1rem;
    transition: 0.3s;
    font-weight: bold;
    color: #fff;

    &:hover{
      filter: brightness(0.8);
    }
  }
`