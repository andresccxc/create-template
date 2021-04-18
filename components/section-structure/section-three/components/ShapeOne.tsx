import DeleteIcon from '../../../DeletIcon';
import { ContainerShapeOne } from '../Styles';

const ShapeOne = ({ setComponent, border, remove = false, removeComponent }: any) => {
    return (
        <ContainerShapeOne bgColor='#000' border={border} className='rounded  py-4 flex items-center justify-center mb-3 relative' onClick={setComponent}>
            <div className='cont-icon flex justify-center items-center'><i className="icon far fa-credit-card text-white" /></div>
            <div className='cont-icon flex justify-center items-center'><i className="icon fas fa-money-bill-wave text-white" /></div>
            <div className='cont-icon flex justify-center items-center'><i className="icon fas fa-university text-white" /></div>
            <div className='cont-icon flex justify-center items-center'><i className="icon fas fa-truck-moving text-white" /></div>
            <div className='cont-icon flex justify-center items-center'><i className="icon fas fa-plus text-white" /></div>
            {remove && (<DeleteIcon remove={removeComponent} />)}
        </ContainerShapeOne>
    );
}

export default ShapeOne;