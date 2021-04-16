import React, { useContext } from 'react';
import ShapeOne from './components/ShapeOne';
import ShapeTwo from './components/ShapeTwo';

import { PrincipalContext } from '../../../context/PrincipalContext';
import { Container } from './Styles';

const SectionOne = () => {
    const { data: { section_one }, setSectionOne } = useContext(PrincipalContext);

    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-5'>Estructura del Header</h2>
            <Container>
                <ShapeOne data={section_one?.header_one} setComponent={() => setSectionOne('one')} />
                <ShapeTwo data={section_one?.header_two} setComponent={() => setSectionOne('two')} />
            </Container>
        </div>
    );
}

export default SectionOne;


export const SectionOneComponent = () => {
    const { data: { section_one }, sectionOne } = useContext(PrincipalContext);

    const renderSection = {
        'one': <ShapeOne data={section_one?.header_one} />,
        'two': <ShapeTwo data={section_one?.header_two} />,
    };
    return (
        <>
            {renderSection[sectionOne]}
        </>
    );
};
