import styled from '@emotion/styled';

const DeleteContainer = styled.div`
      width:20px;
      height:20px;
      background-color:#a10303;
      right:-5px;
      top:-10px;
      font-size:12px;
      border-radius:100%;
      transition:.4s all;
      &:active{
        transform:scale(.8);
      }
`;

const DeleteIcon = ({ remove }: any) => {
    return (
        <DeleteContainer className='absolute flex justify-center items-center cursor-pointer text-white' onClick={remove}>
            X
        </DeleteContainer>
    );
}

export default DeleteIcon;