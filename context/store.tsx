"use client";
import { createContext, useState, useContext } from "react";

interface store {
    showMenu: boolean,
    handleMenu: () => void,
}

export const storeContext = createContext<store | null>(null);



export default function StoreProvider({ children }: { children: React.ReactNode }) {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const handleMenu = () => {
        setShowMenu(prev => !prev);
    }


    return (
        <storeContext.Provider value={{ showMenu, handleMenu }}>
            {children}
        </storeContext.Provider>
    )
}



export const useStore = () => {
    const store = useContext(storeContext);
    if (!store) {
        throw new Error('Store not Provided');
    }
    return store;
}