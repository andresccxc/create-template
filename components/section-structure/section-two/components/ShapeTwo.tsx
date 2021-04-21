import React, { useContext, useEffect } from 'react';
import EditIcon from '../../../EditIcon';
import { ModalContext } from '../../../../context/ModalContext';
import DeleteIcon from '../../../DeletIcon';
import { DragContext } from 'context/DragContext';


const ShapeTwo = ({ data, edit = false, remove = false, removeComponent, id, draggable = true }: any) => {

    const { setShowModal, setImages, setAction, mainImages, setMainImages } = useContext(ModalContext);
    const { setComponent } = useContext(DragContext);

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
        <div className="section-structure structure-two flex my-2 relative mb-5"
            draggable={draggable}
            onDragStart={() => setComponent('two')}
        >
            {mainImages['main-two'][`shape-${id}`]?.map((image: any, index: number) => (
                <img key={`image-${index}`} className='w-1/4 h-full product-image' src={image?.image || image} alt="cellphone" />
            ))}

            {edit && (<EditIcon openModal={openModal} />)}
            {remove && (<DeleteIcon remove={() => removeComponent(id)} />)}
        </div>
    );
}

export default ShapeTwo;