import React, { useEffect, useContext, useState } from 'react';
import ShapeOne from './components/ShapeOne';
import ShapeTwo from './components/ShapeTwo';
import ShapeThree from './components/ShapeThree';
import ShapeFour from './components/ShapeFour';
import ShapeFive from './components/ShapeFive';
import ShapeSix from './components/ShapeSix';
import { PrincipalContext } from '../../../context/PrincipalContext';
import { Container } from './Styles';

const SectionTwo = () => {

    const { data: { section_two }, setSectionTwo, sectionTwo } = useContext(PrincipalContext);
    const addComponent = (component: any) => setSectionTwo([...sectionTwo, component]);

    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-5'>Estructura del Main</h2>
            <Container>
                <ShapeOne setComponent={() => addComponent({ ele: 'one', id: Math.random() * 5 })} data={section_two?.main_one} />
                <ShapeTwo setComponent={() => addComponent({ ele: 'two', id: Math.random() * 6 })} data={section_two.main_two} />
                <ShapeThree setComponent={() => addComponent({ ele: 'three', id: Math.random() * 7 })} />
                <ShapeFour setComponent={() => addComponent({ ele: 'four', id: Math.random() * 8 })} data={section_two.main_four} />
                <ShapeFive setComponent={() => addComponent({ ele: 'five', id: Math.random() * 9 })} />
                <ShapeSix setComponent={() => addComponent({ ele: 'six', id: Math.random() * 10 })} />
            </Container>
        </div>
    );
}

export default SectionTwo;



export const SectionTwoComponent = () => {

    const { sectionTwo, setSectionTwo, data: { section_two } } = useContext(PrincipalContext);

    const removeComponent = (id: number) => setSectionTwo(sectionTwo.filter((ele: any) => ele.id !== id));

    return (
        <>
            {sectionTwo?.map((ele: any, index: number) => {
                switch (ele.ele) {
                    case 'one': return <ShapeOne key={`main-${index}`} data={section_two?.main_one} remove={true} removeComponent={removeComponent} id={ele.id} edit={true} />;
                    case 'two': return <ShapeTwo key={`main-${index}`} data={section_two?.main_two} remove={true} removeComponent={removeComponent} id={ele.id} edit={true} />;
                    case 'three': return <ShapeThree key={`main-${index}`} remove={true} removeComponent={removeComponent} id={ele.id} />;
                    case 'four': return <ShapeFour key={`main-${index}`} data={section_two.main_four} remove={true} removeComponent={removeComponent} id={ele.id} edit={true} />;
                    case 'five': return <ShapeFive key={`main-${index}`} remove={true} removeComponent={removeComponent} id={ele.id} />;
                    case 'six': return <ShapeSix key={`main-${index}`} remove={true} removeComponent={removeComponent} id={ele.id} />;
                    default: '';
                };
            })}
        </>
    );
};
