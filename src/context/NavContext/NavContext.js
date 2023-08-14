"use client"
import React, { createContext, useContext, useState } from 'react';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const [showNav, setShowNav] = useState(true);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <NavContext.Provider value={{ showNav, toggleNav }}>
            {children}
        </NavContext.Provider>
    );
};

export const useNavContext = () => useContext(NavContext);