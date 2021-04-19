import React, { useContext } from 'react';
import ShapeOne from './components/ShapeOne';
import ShapeTwo from './components/ShapeTwo';

import { PrincipalContext } from '../../../context/PrincipalContext';
import { Container } from './Styles';

const SectionOne = () => {
    const { data: { section_one }, setSectionOne, sectionOne } = useContext(PrincipalContext);

    const addComponent = (component: string) => setSectionOne([...sectionOne, component]);

    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-5'>Estructura del Header</h2>
            <Container>
                <ShapeOne data={section_one?.header_one} setComponent={() => addComponent('one')} />
                <ShapeTwo data={section_one?.header_two} setComponent={() => addComponent('two')} />
            </Container>
        </div>
    );
}

export default SectionOne;


export const SectionOneComponent = () => {
    const { data: { section_one }, sectionOne, setSectionOne } = useContext(PrincipalContext);

    const removeComponent = (index: number) => {
        setSectionOne(sectionOne.filter((ele: any, ind: number) => ind !== index));
    };

    return (
        <>
            {sectionOne.map((ele: string, index: number) => {
                return ele === 'one' ? (
                    (<ShapeOne key={`shape-${index}`}
                        data={section_one?.header_one}
                        remove={true}
                        removeComponent={()=>removeComponent(index)}
                    />)
                ) : (<ShapeTwo
                    key={`shape-${index}`}
                    data={section_one?.header_two}
                    remove={true}
                    removeComponent={()=>removeComponent(index)}
                />)
            })}

        </>
    );
};
