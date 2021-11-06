import styled from "styled-components";

export const Container = styled.div`
  grid-template-columns: repeat(3, 1fr);
  display: flex;
  width: 100%;
  margin-top: 2rem;

  div{

    header{
      display: flex;
      align-items: center;
      justify-content: center;

      span{
        margin-left: 0.8rem;
        font-weight: bold;
        font-size: 1.125rem;
      }
    }

    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background: var(--shape);
    border-radius: 1.5rem;
    border: 0;
    padding: 2rem 2rem;
    color: #000;
    transition: 0.4s;

    strong{
      display: block;
      margin-top:1rem ;
      font-size: 2rem;
    }

    &:hover{
      background: var(--yellow-500);
      box-shadow: 11px 16px 15px -2px rgba(139,131,255,0.75);
      -webkit-box-shadow: 11px 16px 15px -2px rgba(139,131,255,0.75);
      -moz-box-shadow: 11px 16px 15px -2px rgba(139,131,255,0.75);
    }
  }
`