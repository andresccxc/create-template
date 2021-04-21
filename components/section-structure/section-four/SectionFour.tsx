import { DragContext } from 'context/DragContext';
import React, { useContext } from 'react';
import ShapeOne from './components/ShapeOne';
import ShapeTwo from './components/ShapeTwo';
import { Container } from './Styles';


const SectionFour = () => {

    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-5'>Estructura del Footer</h2>
            <Container>
                <ShapeOne />
                <ShapeTwo />
            </Container>
        </div>
    );
}
export default SectionFour;


export const SectionFourComponent = () => {

    const { components, setComponents } = useContext(DragContext);
    
    const removeComponent = (id: number) => {
        setComponents(components.filter((ele: any) => ele.id !== id));
    };

    return (
        <>
            {components?.map((ele: any, index: number) => {
                return ele.type === 5 ? (
                    <ShapeOne key={`footer-${index}`}
                        remove={true}
                        removeComponent={() => removeComponent(ele.id)}

                    />
                ) : ele.type === 6 ?
                    (
                        <ShapeTwo key={`footer-${index}`}
                            remove={true}
                            removeComponent={() => removeComponent(ele.id)}
                        />
                    )
                    : ''
            })}
        </>
    );
};

