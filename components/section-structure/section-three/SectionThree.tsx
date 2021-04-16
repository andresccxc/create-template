import React, { useContext } from 'react';
import { Container } from './Styles';
import ShapeOne from './components/ShapeOne';
import ShapeTwo from './components/ShapeTwo';
import { PrincipalContext } from '../../../context/PrincipalContext';
import EditIcon from '../../EditIcon';

const SectionThree = () => {

    const { setSectionThree } = useContext(PrincipalContext);
    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-5'>Estructura del banner</h2>
            <Container>
                <ShapeOne setComponent={() => setSectionThree('one')} border='#f1f1f1' />
                <ShapeTwo setComponent={() => setSectionThree('two')} border='#f1f1f1' />
            </Container>
        </div>
    );
};

export default SectionThree;

export const SectionThreeComponent = () => {
    const { sectionThree } = useContext(PrincipalContext);
    const renderSection = {
        'one': <ShapeOne />,
        'two': <ShapeTwo />,
    };
    return (<>{renderSection[sectionThree]} </>);
};