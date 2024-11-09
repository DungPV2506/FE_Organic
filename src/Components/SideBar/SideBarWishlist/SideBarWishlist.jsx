import React, { useContext } from 'react';
import { SideBarContext } from '../../../Contexts/SideBar';
import './SideBarWishlist.scss';

const SideBar = () => {
    const { isOpen, setIsOpen } = useContext(SideBarContext);

    return <div>Wishlist</div>;
};

export default SideBar;
