import React, { useContext } from 'react';
import { SideBarContext } from '../../../Contexts/SideBar';
import './Register.scss';
import { FaEyeSlash } from 'react-icons/fa';
import { IoIosCheckmark } from 'react-icons/io';

import { BsFillEyeFill } from 'react-icons/bs';

const Register = () => {
    const { showPassword, setShowPassword } = useContext(SideBarContext);

    const handlShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='register-container'>
            <div className='Register-From'>
                <span>Email address</span>
                <input type='text' placeholder='' id='register' />
                <span>Password*</span>
                <input type='password' placeholder='' id='register' />
                <div className='EyesPassword' onClick={handlShowPassword}>
                    {showPassword ? <FaEyeSlash /> : <BsFillEyeFill />}'
                </div>

                <button className='btnRegister'> Register </button>
                <div className='lable-register'>
                    <span>Sign up today and you will be able to:</span>
                    <ul>
                        <li>
                            <IoIosCheckmark />
                            Quick checkout for a seamless shopping experience
                        </li>
                        <li>
                            <IoIosCheckmark />
                            Stay up-to-date with order tracking
                        </li>
                        <li>
                            <IoIosCheckmark />
                            Simplify record keeping with purchase history
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Register;
