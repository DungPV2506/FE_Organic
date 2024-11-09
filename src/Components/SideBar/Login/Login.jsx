import React, { useContext } from 'react';
import { SideBarContext } from '../../../Contexts/SideBar';
import { BsFillEyeFill } from 'react-icons/bs';
import { FaEyeSlash } from 'react-icons/fa';
import './Login.scss';

const Login = () => {
    const { showPassword, setShowPassword } = useContext(SideBarContext);

    const isShowTextPassword = showPassword ? 'text' : 'password';

    const handlShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className='login-Container'>
            <div className='Login-From'>
                <span>Username or email * </span>
                <input type='text' placeholder='' id='login' />
                <span>Password *</span>
                <input type={isShowTextPassword} placeholder='' id='login' />
                <div className='EyesPassword' onClick={handlShowPassword}>
                    {showPassword ? <FaEyeSlash /> : <BsFillEyeFill />}'
                </div>
                <div className='checkbox-Login'>
                    <input type='checkbox' />
                    <span>Remember me</span>
                </div>
                <button className='btnLogin'> Login </button>
                <span>Lost your password?</span>
            </div>
        </div>
    );
};

export default Login;
