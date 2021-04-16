import { ContainerShapeOne } from '../Styles';


const ShapeOne = ({ data, setComponent }: any) => {

    return (
        <ContainerShapeOne
            className={`text-${data?.styles?.color} rounded  py-4 px-3 flex items-center justify-between mb-3`}
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
        </ContainerShapeOne>
    );
}

export default ShapeOne;



