import React, { useContext } from 'react';
import ShapeOne from './components/ShapeOne';
import ShapeTwo from './components/ShapeTwo';
import { PrincipalContext } from '../../../context/PrincipalContext';
import { Container } from './Styles';
import { DragContext } from 'context/DragContext';

const SectionOne = () => {
    
    const { data: { section_one } } = useContext(PrincipalContext);

    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-5'>Estructura del Header</h2>
            <Container id='parent-header'>
                <ShapeOne data={section_one?.header_one} />
                <ShapeTwo data={section_one?.header_two} />
            </Container>
        </div>
    );
}

export default SectionOne;


export const SectionOneComponent = () => {
    const { data: { section_one } } = useContext(PrincipalContext);
    const { components, setComponents } = useContext(DragContext);

    const removeComponent = (id: number) => {
        setComponents(components.filter((ele: any) => ele.id !== id));
    };

    return (
        <div >
            {components.map((ele: any, index: number) => {
                return ele.type === 1 ? (
                    (<ShapeOne key={`shape-${index}`}
                        data={section_one?.header_one}
                        remove={true}
                        removeComponent={() => removeComponent(ele.id)}
                        delete={true}
                        draggable={false}
                    />))
                    : ele.type === 2 ?
                        (
                            <ShapeTwo key={`shape-${index}`}
                                data={section_one?.header_two}
                                remove={true}
                                removeComponent={() => removeComponent(ele.id)}
                                delete={true}
                                draggable={false}
                            />
                        ) : ''
            })}

        </div>
    );
};
