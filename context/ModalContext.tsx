import React, { useState, createContext, useEffect } from 'react';
import { json } from '../data';
export const ModalContext = createContext(null);


const ModalProvider = ({ children }) => {

    const [action, setAction] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [images, setImages] = useState();
    const [mainImages, setMainImages] = useState({});


    useEffect(() => {
        setMainImages({
            ...mainImages, 'main-one': {}, 'main-two': {
                'shape-undefined': json.section_two?.main_two?.images?.slice(0, 4)
            },
            'main-four': {
                'shape-undefined': json.section_two.main_four.images[0],
            },
        });
    }, []);

    const value = {
        showModal, setShowModal, mainImages,
        setMainImages, images, setImages, action, setAction
    };

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;