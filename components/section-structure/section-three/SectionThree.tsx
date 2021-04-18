import React, { useContext } from 'react';
import { Container } from './Styles';
import ShapeOne from './components/ShapeOne';
import ShapeTwo from './components/ShapeTwo';
import { PrincipalContext } from '../../../context/PrincipalContext';
import EditIcon from '../../EditIcon';

const SectionThree = () => {

    const { setSectionThree, sectionThree } = useContext(PrincipalContext);
    const addComponent = (component: string) => setSectionThree([...sectionThree, component]);

    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-5'>Estructura del section x</h2>
            <Container>
                <ShapeOne setComponent={() => addComponent('one')} border='#f1f1f1' />
                <ShapeTwo setComponent={() => addComponent('two')} border='#f1f1f1' />
            </Container>
        </div>
    );
};

export default SectionThree;

export const SectionThreeComponent = () => {

    const { sectionThree, setSectionThree } = useContext(PrincipalContext);

    const removeComponent = (index: number) => {
        setSectionThree(sectionThree.filter((ele: any, ind: number) => ind !== index));
    };

    return (<>
        {sectionThree?.map((ele: string, index: number) => {
            return ele === 'one' ? (
                <ShapeOne key={`section-${index}`} remove={true} removeComponent={()=>removeComponent(index)}/>
            ) : (
                <ShapeTwo key={`section-${index}`} remove={true} removeComponent={()=>removeComponent(index)}/>
            );
        })}
    </>);
};