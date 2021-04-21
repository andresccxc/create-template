import React, { useEffect, useContext } from 'react';
import { DragContext } from 'context/DragContext';
import EditIcon from '../../../EditIcon';
import { ModalContext } from '../../../../context/ModalContext';
import DeleteIcon from '../../../DeletIcon';

const ShapeFour = ({ edit = false, data, remove = false, removeComponent, id, draggable = true }: any) => {

    const { setShowModal, setImages, setAction, mainImages, setMainImages } = useContext(ModalContext);
    const { setComponent } = useContext(DragContext);

    useEffect(() => {
        setMainImages({
            ...mainImages, 'main-four': {
                ...mainImages['main-four'],
                [`shape-${id}`]: mainImages['main-four']['shape-undefined']
            }
        });
    }, []);

    const openModal = () => {
        const currentImage = mainImages['main-four'];
        setShowModal(true);
        if (currentImage) {
            const newImages = data?.images.filter((image: any) => image?.image !== currentImage?.image);
            setImages([...newImages, currentImage, `shape-${id}`]);
        } else {
            setImages([...data?.images, `shape-${id}`]);
        }
        setAction('text-images');
    };

    return (
        <div className='section-structure structure-four flex justify-between items-center py-3 pr-1 relative' 
        draggable={draggable}
        onDragStart={() => setComponent('four')}
        >
            <img className='w-1/3 four-item' src={mainImages['main-four'][`shape-${id}`]?.image} alt="cellphone" />
            <p className='text-xs four-item four-item-text pt-2'>{mainImages['main-four'][`shape-${id}`]?.description}</p>
            {edit && (<EditIcon openModal={openModal} />)}
            {remove && (<DeleteIcon remove={() => removeComponent(id)} />)}
        </div>
    );
}

export default ShapeFour;