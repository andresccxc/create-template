import {ContainerShapeOne} from '../Styles';

const ShapeOne = ({ setComponent }: any) => {
    return (
        <ContainerShapeOne className='footer-section text-white py-2 rounded mb-4' onClick={setComponent}>
            <nav className='nav-footer flex w-full justify-center'>
                <p className='mx-2'>Trabaja con nostros</p>
                <p className='mx-2'>Término y condiciones</p>
                <p className='mx-2'>Privacidad</p>
            </nav>
            <small className='small block w-full text-center'>Copyright © 1999-2021 Moe's Colombia LTDA.</small>
            <small className='small block w-full text-center'>Calle falsa 123 Piso 3, Bogotá D.C., Colombia</small>
        </ContainerShapeOne>
    );
}

export default ShapeOne;