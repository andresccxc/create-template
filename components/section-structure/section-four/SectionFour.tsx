import React, { useContext } from 'react';
import { PrincipalContext } from '../../../context/PrincipalContext';
import ShapeOne from './components/ShapeOne';
import ShapeTwo from './components/ShapeTwo';
import { Container } from './Styles';


const SectionFour = () => {
    const { setSectionFour,sectionFour } = useContext(PrincipalContext);

    const addComponent = (component: string) => setSectionFour([...sectionFour, component]);

    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-5'>Estructura del Footer</h2>
            <Container>
                <ShapeOne setComponent={()=>addComponent('one')}/>
                <ShapeTwo setComponent={()=>addComponent('two')}/>
            </Container>
        </div>
    );
}

export default SectionFour;



export const SectionFourComponent = () => {
    const { sectionFour } = useContext(PrincipalContext);

    const renderSection = {
        'one': <ShapeOne />,
        'two': <ShapeTwo />,
    };
    console.log('la section',sectionFour)

    return (
        <>
            {renderSection[sectionFour]} 
        </>
    );
};

