import styled from "styled-components";

export const Container = styled.table`
  display: grid;
  grid-template-rows: repeat(2, 1fr) ;
  grid-gap: 2rem ;
  margin-top: 2rem;

  table{
    width: 100%;
    border-spacing: 0 0.5rem;
    text-align: left;

    tbody{
      background: var(--shape);
      color: #000;

      td{
        padding: 1rem 1rem;
      }
    }
  }
`