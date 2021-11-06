import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid #d7d7d7;
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem 0;

  span{
    font-size: 1.5rem;
    font-weight: bold;
  }

  button{
    background: var(--orange-500);
    border: 0;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 1.5rem;
    font-weight: bold;
    transition: 0.3s;

    a{
      text-decoration: none;
      color: var(--gray-700);
    }

    svg{
      margin-right: 0.5rem;
      width: 18px;
      height: 18px;
    }

    &:hover{
      filter: brightness(0.8);
    }
  }

  button{
    margin-left: auto;
  }
`