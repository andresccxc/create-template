import DeleteIcon from '../../../DeletIcon';
import { ContainerShapeTwo } from '../Styles';
import { useContext } from 'react';
import { DragContext } from 'context/DragContext';

const ShapeTwo = ({ remove = false, removeComponent, draggable = true }: any) => {

    const { setComponent } = useContext(DragContext);

    return (
        <ContainerShapeTwo className='rounded relative'
            draggable={draggable}
            onDragStart={()=>setComponent(6)}
        >
            <div className="columnf-footer flex justify-center py-2 items-center flex-wrap mt-3">
                <div className='footer-column'>
                    <img className='col-img m-auto' src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/payment.svg" alt="card image" />
                    <h2 className='col-text text-center mt-1'>Tarjeta o efectivo</h2>
                </div>
                <div className='footer-column'>
                    <img className='col-img m-auto' src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/shipping.svg" alt="card image" />
                    <h2 className='col-text text-center mt-1'>Envío gratis</h2>
                </div>
                <div className='footer-column'>
                    <img className='col-img m-auto' src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/protected.svg" alt="card image" />
                    <h2 className='col-text text-center mt-1'>Seguridad</h2>
                </div>
                <small className='copyright block w-full text-center mt-1'>© 2021, Google.</small>
            </div>
            {remove && (<DeleteIcon remove={removeComponent} />)}
        </ContainerShapeTwo>
    );
}

export default ShapeTwo;