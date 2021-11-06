import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 5rem);

  .imagem-logo{
    margin-left: 5rem;
    width: 20rem;
    height: rem;
  }
`

export const ContentWrapper = styled.div`
  margin-top: 2rem;
  
  main{
    max-width: 680px;
  }

  h1{
    margin-top: 2rem;
    font-weight: 800;
    font-size: 3rem;
    line-height: 3rem;

    span{
      color: var(--orange-500);
    }
  }
  
  p{
    font-weight: bold;
    margin-top: 1rem;
    font-size: 1.125em;

    span{
      font-weight: bold;
      color: var(--purple-500);
    }
  }

  .container-buttons{
    display: flex;
    align-items: initial;
  }

  button{
    margin-top: 2rem;
    color: var(--purple-500);
    background: var(--yellow-500);
    border: 0;
    border-radius: 2rem;
    padding: 1rem 3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
    font-weight: bold;

    a{
      text-decoration: none;
      color: var(--gray-700);
    }

    &:hover{
      filter: brightness(0.8);
    }

    & + button{
      margin-left: 1rem;
      background: var(--purple-500);
      font-weight: bold;
    }
  }
`
