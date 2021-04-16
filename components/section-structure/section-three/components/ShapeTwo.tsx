import { ContainerShapeOne } from '../Styles';

const ShapeOne = ({ setComponent, border }: any) => {
    return (
        <ContainerShapeOne bgColor='#fff159' border={border} className='rounded  py-4 flex items-center justify-center mb-3' onClick={setComponent}>
            <div className='cont-icon flex justify-center items-center'><i className="icon far fa-credit-card" /></div>
            <div className='cont-icon flex justify-center items-center'><i className="icon fas fa-money-bill-wave" /></div>
            <div className='cont-icon flex justify-center items-center'><i className="icon fas fa-university" /></div>
            <div className='cont-icon flex justify-center items-center'><i className="icon fas fa-truck-moving" /></div>
            <div className='cont-icon flex justify-center items-center'><i className="icon fas fa-plus" /></div>
        </ContainerShapeOne>
    );
}

export default ShapeOne;