import { createContext, useState } from 'react';

export const SideBarContext = createContext();

const SideBarProvider = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [isRegister, setIsRegister] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const contextValue = {
        isOpen,
        setIsOpen,
        isLogin,
        setIsLogin,
        isRegister,
        setIsRegister,
        showPassword,
        setShowPassword
    };
    return (
        <SideBarContext.Provider value={contextValue}>
            {props.children}
        </SideBarContext.Provider>
    );
};

export default SideBarProvider;
