import { useContext } from 'react';
import { DragContext } from 'context/DragContext';
import DeleteIcon from '../../../DeletIcon';
import { ContainerShapeOne } from '../Styles';

const ShapeOne = ({ border, remove = false, removeComponent, draggable = true }: any) => {

    const { setComponent } = useContext(DragContext);

    return (
        <ContainerShapeOne bgColor='#fff159'
            border={border}
            className='rounded  py-4 flex items-center justify-center mb-3 relative'
            onClick={setComponent}
            draggable={draggable}
            onDragStart={() => setComponent(4)}
        >
            <div className='cont-icon flex justify-center items-center'><i className="icon far fa-credit-card" /></div>
            <div className='cont-icon flex justify-center items-center'><i className="icon fas fa-money-bill-wave" /></div>
            <div className='cont-icon flex justify-center items-center'><i className="icon fas fa-university" /></div>
            <div className='cont-icon flex justify-center items-center'><i className="icon fas fa-truck-moving" /></div>
            <div className='cont-icon flex justify-center items-center'><i className="icon fas fa-plus" /></div>
            {remove && (<DeleteIcon remove={removeComponent} />)}
        </ContainerShapeOne>
    );
}

export default ShapeOne;