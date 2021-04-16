import React, { useState, createContext } from 'react';

export const ModalContext = createContext(null);


const ModalProvider = ({ children }) => {

    const [action, setAction] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [images, setImages] = useState();
    const [mainImages, setMainImages] = useState({});


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