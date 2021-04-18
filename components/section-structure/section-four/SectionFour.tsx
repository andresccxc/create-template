import React, { useContext } from 'react';
import { PrincipalContext } from '../../../context/PrincipalContext';
import ShapeOne from './components/ShapeOne';
import ShapeTwo from './components/ShapeTwo';
import { Container } from './Styles';


const SectionFour = () => {
    const { setSectionFour, sectionFour } = useContext(PrincipalContext);

    const addComponent = (component: string) => setSectionFour([...sectionFour, component]);

    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-5'>Estructura del Footer</h2>
            <Container>
                <ShapeOne setComponent={() => addComponent('one')} />
                <ShapeTwo setComponent={() => addComponent('two')} />
            </Container>
        </div>
    );
}

export default SectionFour;



export const SectionFourComponent = () => {
    const { sectionFour, setSectionFour } = useContext(PrincipalContext);
    const removeComponent = (index: number) => {
        setSectionFour(sectionFour.filter((ele: any, ind: number) => ind !== index));
    };

    return (
        <>
            {sectionFour?.map((ele: any, index: number) => {
                return ele === 'one' ? (
                    <ShapeOne key={`footer-${index}`} remove={true} removeComponent={()=>removeComponent(index)} />
                ) : (
                    <ShapeTwo key={`footer-${index}`} remove={true} removeComponent={()=>removeComponent(index)} />
                )
            })}
        </>
    );
};

