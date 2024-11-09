import React, { useContext, useState } from 'react';
import './SideBar.scss';
import { SideBarContext } from '../../../Contexts/SideBar';
import { IoCloseSharp } from 'react-icons/io5';
import { PiUserCircleThin } from 'react-icons/pi';
import { BsFillEyeFill } from 'react-icons/bs';
import Login from '../Login/Login';
import Register from '../Register/Register';

const SideBar = () => {
    const {
        isOpen,
        setIsOpen,
        isLogin,
        setIsLogin,
        isRegister,
        setIsRegister,
        showPassword,
        setShowPassword
    } = useContext(SideBarContext);

    const handlToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLogin = () => {
        setIsLogin(true);
        setIsRegister(false);
    };

    const handleRegister = () => {
        setIsLogin(false);
        setIsRegister(true);
    };

    return (
        <div>
            {isOpen && <div className='overLay'></div>}

            <div className={`sideBar ${isOpen ? 'slideSideBar' : ''}`}>
                {isOpen && (
                    <div className='CloseSideBar' onClick={handlToggle}>
                        <IoCloseSharp />
                    </div>
                )}
                <div className='LayoutLogin'>
                    <p>
                        <PiUserCircleThin />
                    </p>
                    {/* {showPassword ? <FaEyeSlash /> : <PiUserCircleThin />} */}
                    <h4>SIGN IN</h4>

                    <div className='signin-title'>
                        <div>
                            <span className='login' onClick={handleLogin}>
                                LOG IN
                            </span>
                        </div>
                        <div>
                            <span className='register' onClick={handleRegister}>
                                REGISTER
                            </span>
                        </div>
                    </div>
                    {isLogin ? <Login /> : isRegister ? <Register /> : ''}

                    {/* {isLogin ? (
                        <div className='Login-From'>
                            <span>Username or email*</span>
                            <input type='text' placeholder='' id='login' />
                            <span>Password*</span>
                            <input type='password' placeholder='' id='login' />
                            <BsFillEyeFill className='EyesPassword' />
                            <div className='checkbox-Login'>
                                <input type='checkbox' />
                                <span>Remember me</span>
                            </div>
                            <button className='btnLogin'> Login </button>
                            <span>Lost your password?</span>
                        </div>
                    ) : (
                        'REGISTER'
                    )} */}
                    {/* <div className='Login-From'>
                        <span>Username or email*</span>
                        <input type='text' placeholder='' id='login' />
                        <span>Password*</span>
                        <input type='password' placeholder='' id='login' />
                        <BsFillEyeFill className='EyesPassword' />
                        <div className='checkbox-Login'>
                            <input type='checkbox' />
                            <span>Remember me</span>
                        </div>
                        <button className='btnLogin'> Login </button>
                        <span>Lost your password?</span>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SideBar;
