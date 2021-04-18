import React, { useContext } from 'react';
import { ShapeOneComponent } from '../Styles';
import { ModalContext } from '../../../../context/ModalContext';
import EditIcon from '../../../EditIcon';
import DeleteIcon from '../../../DeletIcon';

const ShapeOne = ({ data, setComponent, edit = false, index, remove = false, removeComponent }: any) => {

    const { setShowModal, setImages, mainImages } = useContext(ModalContext);
    const { content: { images } } = data;

    const openModal = () => {
        setShowModal(true);
        const newImages = images.map((image: any) => { return { image } })
        setImages([...newImages,`shape-${index}`]);
    };

    return (
        <ShapeOneComponent className='relative' onClick={setComponent}>
            <img className='w-full h-full rounded' src={mainImages['main-one'] || images[0]} alt="cellphone" />
            {edit && (<EditIcon icon='fas fa-camera' openModal={openModal} />)}
            {remove && (<DeleteIcon remove={()=>removeComponent(index)} />)}
        </ShapeOneComponent>
    );
};
export default ShapeOne;