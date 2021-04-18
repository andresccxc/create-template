import { ContainerShapeOne } from '../Styles';
import DeleteIcon from '../../../DeletIcon';

const ShapeOne = ({ data, setComponent, remove = false, removeComponent }: any) => {

    return (
        <ContainerShapeOne
            className={`text-${data?.styles?.color} rounded  py-4 px-3 flex items-center justify-between mb-3 relative`}
            onClick={setComponent}
            bg={data?.styles?.background}
        >
            <i className={`${data?.content?.logo} shapeone-logo`}></i>
            <nav className='shapeone-nav flex'>
                {data?.content?.links?.map((link: string, index: number) => (
                    <p key={`link-${index}`} className='shapeone-link'>{link}</p>
                ))}
                {data?.content?.shoppingCart && (<i className="fas fa-shopping-cart shapeone-link pt-1" />)}
            </nav>
            {remove && (<DeleteIcon remove={removeComponent} />)}
        </ContainerShapeOne>
    );
}

export default ShapeOne;



