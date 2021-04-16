import React, { useContext } from 'react';
import { ShapeOneComponent } from '../Styles';
import { ModalContext } from '../../../../context/ModalContext';
import EditIcon from '../../../EditIcon';


const ShapeOne = ({ data, setComponent, edit = false }: any) => {

    const { setShowModal, setImages, mainImages } = useContext(ModalContext);
    const { content: { images } } = data;

    const openModal = () => {
        setShowModal(true);
        const newImages = images.map((image: any) => { return { image } })
        setImages(newImages);
    };

    return (
        <ShapeOneComponent onClick={setComponent}>
            <img className='w-full h-full rounded' src={mainImages['main-one'] || images[0]} alt="cellphone" />
            {edit && (<EditIcon icon='fas fa-camera' openModal={openModal} />)}
        </ShapeOneComponent>
    );
};
export default ShapeOne;