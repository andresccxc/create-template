import styled from '@emotion/styled';

export const Container = styled.div`
   width:25rem;
`;

export const ContainerShapeOne = styled.div`
      background-color:#000;
      cursor: pointer;
    .small,.nav-footer{
        font-size:0.625rem;
    }
`;

export const ContainerShapeTwo = styled.div`
      background-color:#fff159;
      cursor: pointer;
    .footer-column{
        margin-right:0.3125rem;
        width:20%;
        &:last-of-type{
            margin-right:none;
        }
        .col-img{
            width:2.5rem;
            height:1.875rem;
        }
        .col-text{
            font-size:0.6563rem;
        }
    }
    .copyright{
            font-size:0.625rem;
            font-weight:bold;
    }
`;