import styled from '@emotion/styled';

export const Container = styled.div`
  width:25rem;
  border:0.0625rem solid #ccc;
  padding:1.25rem 0;
  height:27.5rem;
  .current-section{
        background-color:#000;
        color:#fff;
        font-weight:bold;
      }
  >.section{
      height:6.25rem;
      border-top:0.0625rem solid #ccc;
       &:last-of-type{
        border-bottom:0.0625rem solid #ccc;
      } 
  }
`;