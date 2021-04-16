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
    const { data: { section_two }, setSectionTwo } = useContext(PrincipalContext);
    const { setMainImages, mainImages } = useContext(ModalContext);

    useEffect(() => {
        setMainImages({ ...mainImages, 'main-two': section_two?.main_two?.images?.slice(0, 4), 'main-four':section_two.main_four.images[0] });
    }, []);

    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-5'>Estructura del Main</h2>
            <Container>
                <ShapeOne setComponent={() => setSectionTwo('one')} data={section_two?.main_one} edit={true} />
                <ShapeTwo setComponent={() => setSectionTwo('two')} data={section_two.main_two} edit={true} />
                <ShapeThree setComponent={() => setSectionTwo('three')} />
                <ShapeFour setComponent={() => setSectionTwo('four')} data={section_two.main_four} edit={true} />
                <ShapeFive setComponent={() => setSectionTwo('five')} />
                <ShapeSix setComponent={() => setSectionTwo('six')} />
            </Container>
        </div>
    );
}

export default SectionTwo;



export const SectionTwoComponent = () => {
    const { sectionTwo, data: { section_two } } = useContext(PrincipalContext);

    const renderSection = {
        'one': <ShapeOne data={section_two?.main_one} />,
        'two': <ShapeTwo data={section_two?.main_two} />,
        'three': <ShapeThree />,
        'four': <ShapeFour />,
        'five': <ShapeFive />,
        'six': <ShapeSix />,
    };
    return (
        <>
            {renderSection[sectionTwo]}
        </>
    );
};
