import React, { useContext } from 'react';
import { Container } from './Styles';
import { SectionOneComponent } from '../section-structure/section-one/SectionOne';
import { SectionTwoComponent } from '../section-structure/section-two/SectionTwo';
import { SectionThreeComponent } from '../section-structure/section-three/SectionThree';
import { SectionFourComponent } from '../section-structure/section-four/SectionFour';
import { DragContext } from 'context/DragContext';

const FinalPage = () => {

    const { component, components, setComponents } = useContext(DragContext);

    const drop = (e) => {
        setComponents([...components, { draggable: false, delete: true, id: Math.random() * 3, type: component }])
    };

    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-5'>Resultado</h2>
            <Container className='structure-container rounded cursor-pointer'
                id='container'
                onDrop={drop}
                onDragOver={e => e.preventDefault()}
            >
                <SectionOneComponent />
                <SectionTwoComponent />
                <SectionThreeComponent />
                <SectionFourComponent />
            </Container>
        </div>
    );
}

export default FinalPage;