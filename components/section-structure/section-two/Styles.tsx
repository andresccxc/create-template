import styled from '@emotion/styled';

export const Container = styled.div`
  width:25rem;
 .section-structure{
  border:0.0625rem solid #ccc;
  margin-bottom:1.25rem;
  cursor: pointer;
  &:last-of-type{
    margin:0;
  }
 }

  .structure-two{
    height:7.8125rem;
    padding:0.625rem;
  }
 
  .structure-three{
    padding-top:0.75rem;
    .three-section{
      width:6.25rem;
      .rounded-image{
        width:3.75rem;
        height:3.75rem;
        border-radius:100%;
        border:0.0625rem solid #ccc;
        padding:0.3125rem;
      }
      .text-xs{
        font-size:0.625rem;
      }
    }
  }

  .structure-four{
    .four-item{
      height:9.375rem;
    }
    .four-item-text{
      width:100%;
      padding-right:1.25rem;
    }
  }

`;

export const ShapeOneComponent = styled.div`
    height:12.5rem;
    border:none;
    margin-bottom:1.25rem;
    cursor: pointer;
    position:relative;
`;