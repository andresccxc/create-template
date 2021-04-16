import React, { useContext } from 'react';
import EditIcon from '../../../EditIcon';
import { ModalContext } from '../../../../context/ModalContext';


const ShapeFour = ({ setComponent, edit = false, data }: any) => {

    const { setShowModal, setImages, setAction, mainImages } = useContext(ModalContext);
    
    const openModal = () => {
        const currentImage = mainImages['main-four'];
        setShowModal(true);
        if (currentImage) {
            const newImages = data?.images.filter((image: any) => image?.image !== currentImage?.image);
            setImages([...newImages,currentImage]);
        }else{
            setImages(data?.images);
        }
        setAction('text-images');
    };
 
    return (
        <div className='section-structure structure-four flex justify-between items-center py-3 pr-1 relative' onClick={setComponent}>
            <img className='w-1/3 four-item' src={mainImages['main-four']?.image} alt="cellphone" />
            <p className='text-xs four-item four-item-text pt-2'>{mainImages['main-four']?.description}</p>
            {edit && (<EditIcon openModal={openModal} />)}
        </div>
    );
}

export default ShapeFour;