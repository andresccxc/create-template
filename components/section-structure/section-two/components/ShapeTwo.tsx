import React, { useContext, useState, useEffect } from 'react';
import EditIcon from '../../../EditIcon';
import { ModalContext } from '../../../../context/ModalContext';


const ShapeTwo = ({ setComponent, data, edit = false }: any) => {

    const { setShowModal, setImages, setAction, mainImages } = useContext(ModalContext);

    const openModal = () => {
        setShowModal(true);
        const images = data.images.map((image: any) => { return { image, selected: false } })
        setImages(images);
        setAction('images')
    };

    return (
        <div className="section-structure structure-two flex my-2 relative" onClick={setComponent}>
            {mainImages['main-two']?.map((image: any, index: number) => (
                <img key={`image-${index}`} className='w-1/4 h-full product-image' src={image?.image || image} alt="cellphone" />
            ))}
            {edit && (<EditIcon openModal={openModal} />)}
        </div>
    );
}

export default ShapeTwo;