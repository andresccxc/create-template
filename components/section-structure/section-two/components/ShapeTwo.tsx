import React, { useContext, useState, useEffect } from 'react';
import EditIcon from '../../../EditIcon';
import { ModalContext } from '../../../../context/ModalContext';
import DeleteIcon from '../../../DeletIcon';

const ShapeTwo = ({ setComponent, data, edit = false, remove = false, removeComponent, id }: any) => {

    const { setShowModal, setImages, setAction, mainImages, setMainImages } = useContext(ModalContext);

    const openModal = () => {
        setShowModal(true);
        const images = data.images.map((image: any) => { return { image, selected: false } })
        setImages([...images, `shape-${id}`]);
        setAction('images');
    };

    useEffect(() => {
        setMainImages({
            ...mainImages, 'main-two': {
                ...mainImages['main-two'],
                [`shape-${id}`]: mainImages['main-two']['shape-undefined']
            }
        });
    }, []);
   
    return (
        <div className="section-structure structure-two flex my-2 relative mb-5" onClick={setComponent}>
            {mainImages['main-two'][`shape-${id}`]?.map((image: any, index: number) => (
                <img key={`image-${index}`} className='w-1/4 h-full product-image' src={image?.image || image} alt="cellphone" />
            ))}
    
            {edit && (<EditIcon openModal={openModal} />)}
            {remove && (<DeleteIcon remove={() => removeComponent(id)} />)}
        </div>
    );
}

export default ShapeTwo;