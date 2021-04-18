import React, { useEffect, useContext } from 'react';
import ShapeOne from './components/ShapeOne';
import ShapeTwo from './components/ShapeTwo';
import ShapeThree from './components/ShapeThree';
import ShapeFour from './components/ShapeFour';
import ShapeFive from './components/ShapeFive';
import ShapeSix from './components/ShapeSix';
import { PrincipalContext } from '../../../context/PrincipalContext';
import { ModalContext } from '../../../context/ModalContext';
import { Container } from './Styles';

const SectionTwo = () => {
    const { data: { section_two }, setSectionTwo, sectionTwo } = useContext(PrincipalContext);
    const { setMainImages, mainImages } = useContext(ModalContext);

    const addComponent = (component: string) => setSectionTwo([...sectionTwo, component]);

    useEffect(() => {
        setMainImages({ ...mainImages, 'main-two': section_two?.main_two?.images?.slice(0, 4), 'main-four': section_two.main_four.images[0] });
    }, []);

    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-5'>Estructura del Main</h2>
            <Container>
                <ShapeOne setComponent={() => addComponent('one')} data={section_two?.main_one} />
                <ShapeTwo setComponent={() => addComponent('two')} data={section_two.main_two} />
                <ShapeThree setComponent={() => addComponent('three')} />
                <ShapeFour setComponent={() => addComponent('four')} data={section_two.main_four} />
                <ShapeFive setComponent={() => addComponent('five')} />
                <ShapeSix setComponent={() => addComponent('six')} />
            </Container>
        </div>
    );
}

export default SectionTwo;



export const SectionTwoComponent = () => {

    const { sectionTwo, setSectionTwo, data: { section_two } } = useContext(PrincipalContext);

    const removeComponent = (index: number) => {
        setSectionTwo(sectionTwo.filter((ele: any, ind: number) => ind !== index));
    };

    return (
        <>
            {sectionTwo?.map((ele: string, index: number) => {

                switch (ele) {
                    case 'one': return <ShapeOne key={`main-${index}`} data={section_two?.main_one} remove={true} removeComponent={removeComponent} index={index} edit={true} />;
                    case 'two': return <ShapeTwo key={`main-${index}`} data={section_two?.main_two} remove={true} removeComponent={removeComponent} edit={true} />;
                    case 'three': return <ShapeThree key={`main-${index}`} remove={true} removeComponent={() => removeComponent(index)} />;
                    case 'four': return <ShapeFour key={`main-${index}`} remove={true} removeComponent={() => removeComponent(index)} edit={true} />;
                    case 'five': return <ShapeFive key={`main-${index}`} remove={true} removeComponent={() => removeComponent(index)} />;
                    case 'six': return <ShapeSix key={`main-${index}`} remove={true} removeComponent={() => removeComponent(index)} />;
                    default: '';
                };
            })}
        </>
    );
};
