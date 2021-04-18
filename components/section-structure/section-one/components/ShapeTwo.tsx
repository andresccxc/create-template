import { ContainerShapeTwo } from '../Styles';
import DeleteIcon from '../../../DeletIcon';

const ShapeTwo = ({ setComponent, data, remove = false, removeComponent }: any) => {



    return (
        <ContainerShapeTwo
            className="rounded  py-3 px-2 flex items-center justify-between mb-3 relative"
            onClick={setComponent}
            bg={data?.styles?.background}
        >
            <i className={`${data?.content?.logo} shapetwo-logo relative`}></i>
            <nav className='shapeone-nav flex items-center'>
                {data?.content?.links?.map((link: string, index: number) => (
                    <p key={`link-${index}`} className='shapeone-link'>{link}</p>
                ))}
                {data?.content?.shoppingCart && (<i className="fas fa-shopping-cart shapeone-link pt-1" />)}
                <div className='search-container relative'>
                    <input className='searchbar rounded px-1' type="text" />
                    <i className="fas fa-search forget absolute" />
                </div>
            </nav>
            {remove && (<DeleteIcon remove={removeComponent} />)}
        </ContainerShapeTwo>
    );
}
export default ShapeTwo;