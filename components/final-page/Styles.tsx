import styled from '@emotion/styled';

export const Container = styled.div`
  width:25rem;
  height:27.5rem;
  .section{
      height:6.25rem;
      border-top:0.0625rem solid #ccc;
       &:last-of-type{
        border-bottom:0.0625rem solid #ccc;
      } 
  }
`;