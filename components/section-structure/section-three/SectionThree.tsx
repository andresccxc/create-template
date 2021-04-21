import React, { useContext } from 'react';
import { Container } from './Styles';
import ShapeOne from './components/ShapeOne';
import ShapeTwo from './components/ShapeTwo';
import { PrincipalContext } from '../../../context/PrincipalContext';
import { DragContext } from 'context/DragContext';


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

    const { components, setComponents } = useContext(DragContext);


    const removeComponent = (id: number) => {
        setComponents(components.filter((ele: any) => ele.id !== id));
    };

    return (<>
        {components?.map((ele: any, index: number) => {
            return ele.type === 3 ? (
                <ShapeOne key={`section-${index}`} remove={true} removeComponent={() => removeComponent(ele.id)} />
            ) : ele.type === 4 ?
                (
                    <ShapeTwo key={`section-${index}`} remove={true} removeComponent={() => removeComponent(ele.id)} />
                ) : '';
        })}
    </>);
};