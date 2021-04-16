import styled from '@emotion/styled';

export const Container = styled.div`
   width:25rem;
`;

export const ContainerShapeOne:any = styled.div`
      border:1px solid ${(props: any) => props.border ? props.border : 'transparent'};
      cursor: pointer;
    .cont-icon{
        border:1px solid #f1f1f1;
        background-color:${(props: any) => props.bgColor ? props.bgColor : 'red'};
        border-radius:100%;
        width:40px;
        height:40px;
        margin-right:8px;
        &:last-of-type{
            margin-right:none;
        }
        &:hover>.icon{
               transform:scale(1.4)
           }
        .icon{
           font-size:14px;
           transition:.4s all;
        }

    }
`;