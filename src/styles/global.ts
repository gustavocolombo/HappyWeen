import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --shape: #ffffff;
    --gray-300: #a8a8b3;
    --gray-980: #121214;
    --gray-700: #1f2729;
    --yellow-500: #eba417;
    --orange-500: #ffa500;
    --purple-500: #6933ff;
    --purple-700: #5429CC;
    }

  body, input, textarea, button{
    font-family: Roboto;
    -webkit-font-smoothing: antialised;
  }

  body{
    background: var(--gray-980);
    color: var(--shape);
    font-family: Roboto;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    cursor: not-allowed;
    opacity: 0.5;
  }

  .overlayModal{
    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modalClass{
    width: 100%;
    max-width: 576px;
    background: var(--shape);
    color: #121214;
    padding: 3rem;
    position: relative;
    border-radius: 0.5rem;
  }
`;