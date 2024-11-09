import React, { useContext } from 'react';
import { SideBarContext } from '../../../Contexts/SideBar';
import './Navbar.scss';

//import icons
import { BsSearch } from 'react-icons/bs';
import { PiUserCircleLight } from 'react-icons/pi';
import { CiHeart } from 'react-icons/ci';
import { GiShoppingCart } from 'react-icons/gi';
import { images } from '../../../Assets/assets';
import { CiLocationOn } from 'react-icons/ci';
import { GoChevronDown } from 'react-icons/go';
import { CgMenuGridO } from 'react-icons/cg';
import { CiSun } from 'react-icons/ci';
import { FaGripfire } from 'react-icons/fa6';
import { GiStrawberry } from 'react-icons/gi';
import { MdOutlinePhone } from 'react-icons/md';

const Navbar = () => {
    const { isOpen, setIsOpen } = useContext(SideBarContext);
    return (
        <div className='Navbar'>
            <div className='navbar-container'>
                <div className='navbar-left'>
                    <div className='Logo'>
                        <img src={images.Logo} alt='' />
                    </div>
                    <div className='Location-Store'>
                        <div className=''>
                            <CiLocationOn className='location-icon' />
                        </div>
                        <div className=''>
                            <span className='location-title'>
                                <strong>Find</strong> <br />A Store
                            </span>
                        </div>
                    </div>
                    <div className='Browse-Dropdown'>
                        <div className='dropdown'>
                            <CgMenuGridO className='dropdown-icon-menu' />
                            <button class='dropbtn'>Browse Now</button>
                            <GoChevronDown className='dropdown-icon-down' />
                            <div class='dropdown-content'>
                                <a href='#'>
                                    <CiSun />
                                    Daily deal
                                </a>
                                <a href='#'>
                                    <FaGripfire />
                                    Top Products
                                </a>
                                <a href='#'>
                                    <GiStrawberry />
                                    Fruirts & Veggies
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------------------------------------------------- */}

                <div className='navbar-center'>
                    <input type='text' placeholder='Search' id='sreach' />
                    <BsSearch className='location-icon' />
                </div>

                {/* ----------------------------------------------------- */}

                <div className='navbar-right'>
                    <div className='Signin' onClick={() => setIsOpen(true)}>
                        <PiUserCircleLight className='Signin-icon' />
                        Sign In
                    </div>
                    <hr />
                    <div className='Wishlist' onClick={() => setIsOpen(true)}>
                        <CiHeart className='Wishlist-icon' />
                        Wishlist
                        <div className='Wishlist-item'>0</div>
                    </div>
                    <hr />

                    <div className='Cart'>
                        <GiShoppingCart className='Cart-icon' />
                        Cart
                        <div className='Cart-item'>0</div>
                    </div>
                </div>
            </div>
            {/* <hr /> */}

            <div className='Navbar-menu-item'>
                <div className='menu-item-left'>
                    <ul_ className='menu-item-left'>
                        <li_>🍾 Beverages</li_>
                        <li_>🥖 Bread & Cookies</li_>
                        <li_>🍤 Frozen Seafood</li_>
                        <li_>🍖 Raw Meat</li_>
                        <li_>🍓 Vegetables</li_>
                    </ul_>
                </div>
                <div className='menu-item-right'>
                    <MdOutlinePhone className='phoneNumber' />
                    <p>
                        Need help? Call Us: <span> +9 2500 888</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
