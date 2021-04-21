import React, { useContext } from 'react';
import { ShapeOneComponent } from '../Styles';
import { ModalContext } from '../../../../context/ModalContext';
import EditIcon from '../../../EditIcon';
import DeleteIcon from '../../../DeletIcon';
import { DragContext } from 'context/DragContext';

const ShapeOne = ({ data, edit = false, remove = false, removeComponent, id, draggable = true }: any) => {

    const { setShowModal, setImages, mainImages } = useContext(ModalContext);
    const { setComponent } = useContext(DragContext);
    
    const { content: { images } } = data;
    const openModal = () => {
        setShowModal(true);
        const newImages = images.map((image: any) => { return { image } })
        setImages([...newImages, `shape-${id}`]);
    };
    const imgs = Object.keys(mainImages).length;



    return (
        <ShapeOneComponent
            className='relative'
            draggable={draggable}
            onDragStart={()=>setComponent('one')}
        >
            <img className='w-full h-full rounded' src={imgs && mainImages['main-one'][`shape-${id}`] || images[0]} alt="cellphone" />
            {edit && (<EditIcon icon='fas fa-camera' openModal={openModal} />)}
            {remove && (<DeleteIcon remove={() => removeComponent(id)} />)}
        </ShapeOneComponent>
    );
};
export default ShapeOne;