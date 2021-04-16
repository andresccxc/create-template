import styled from '@emotion/styled';

const IconContainer = styled.div`
     right:5px;
     top:5px;
     width:25px;
     height:25px;
     border-radius:100%;
     background-color:rgba(0,0,0,.7);
     .edit-icon{
       font-size:11px;
       padding-right:1px;
     }
`;

const EditIcon = ({ openModal, icon = 'fas fa-pencil-alt' }: any) => {
    return (
        <IconContainer className='absolute flex justify-center items-center cursor-pointer' onClick={openModal}>
            <i className={`${icon} text-white edit-icon`}></i>
        </IconContainer>
    );
}

export default EditIcon;