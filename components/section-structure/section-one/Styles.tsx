import styled from '@emotion/styled';

export const Container = styled.div`
  width:25rem;
`;

export const ContainerShapeOne: any = styled.div`
      background-color: ${(props: any) => props.bg ? props.bg : '#ccc'};
      cursor: pointer;
    .shapeone-logo{
      font-size:1.25rem;
      transition:.4s all;
      &:hover{
        transform:rotate(45deg);
      }
    }
    .shapeone-link{
       font-size:0.75rem;
       margin-right:0.375rem;
       cursor: pointer;
       &:last-of-type{
         margin-right:none;
       }
    }
`;

export const ContainerShapeTwo:any = styled.div`
      background-color: ${(props: any) => props.bg ? props.bg : '#ccc'};
      cursor: pointer;
      .shapetwo-logo{
      font-size:1.25rem;
      left:0.25rem;
      transition:.4s all;
      &:hover{
        transform:rotate(45deg);
      }
    }
    .shapeone-link{
       font-size:0.75rem;
       margin-right:0.375rem;
       cursor: pointer;
       &:last-of-type{
         margin-right:none;
       }
    }
    .search-container{
      width:95px;
  
      .searchbar{
        width:100%;
        border:0.0625rem solid transparent;
        font-size:0.75rem;
        &:focus{
          outline:none;
          padding:0.1875rem 0.375rem;
        }
      }
      .forget{
        right:0.3125rem;
        font-size:0.75rem;
        top:0.5rem;
        cursor: pointer;
      }
    }
`;