import React, { useContext } from 'react';
import { PrincipalContext } from '../../context/PrincipalContext';
import { Container } from './Styles';

const Structure = () => {

    const { section, setSection } = useContext(PrincipalContext);
    const getClassName = (className) => className === section && 'current-section';

    return (
        <div className='flex flex-col items-center'>
            <h1 className='font-bold text-2xl mb-5'>Estructura de la página</h1>
            <Container className='structure-container rounded cursor-pointer'>
                <div className={`section flex justify-center items-center ${getClassName('section-one')}`}
                    onClick={() => setSection('section-one')}
                >
                    Header
                </div>
                <div className={`section flex justify-center items-center ${getClassName('section-two')}`}
                    onClick={() => setSection('section-two')}
                >
                    Main
                </div>
                <div className={`section flex justify-center items-center ${getClassName('section-three')}`}
                    onClick={() => setSection('section-three')}
                >
                    Banner
                </div>
                <div className={`section flex justify-center items-center ${getClassName('section-four')}`}
                    onClick={() => setSection('section-four')}
                >
                    Footer
                </div>
            </Container>
        </div>

    );
}

export default Structure;