import React, { createContext, useState } from 'react';
import MenuLateral from './MenuLateral';

const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
    const [isMenuLateral1, setIsMenuLateral1] = useState(false);
    const MenuLateral1 = () => setIsMenuLateral1(!isMenuLateral1);

    const headerData = { title: "Mi Aplicación" };
    const footerData = { copyright: "© 2023 Mi Empresa" };

    // const value = {
    //     isSidebarVisible,
    //     MenuLateral1,
    //     headerData,
    //     footerData,
    // };
    const value = {}

    return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};

export const useLayout = () => React.useContext(LayoutContext);
export default LayoutProvider