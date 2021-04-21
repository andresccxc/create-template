import React, { useState, createContext } from 'react';
export const DragContext = createContext(null);


const DragProvider = ({ children }) => {


    const [components, setComponents] = useState([]);
    const [component, setComponent] = useState(1);
    
    const value = { component, setComponent, components, setComponents };

    return (
        <DragContext.Provider value={value}>
            {children}
        </DragContext.Provider>
    );
}

export default DragProvider;