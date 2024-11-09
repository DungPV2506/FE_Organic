import Logo from './images/Logo.png';
import banner from './images/banner 1.png';
import banner2 from './images/banner.jpg';
import { PiShoppingCartLight } from 'react-icons/pi';
import { VscHeart } from 'react-icons/vsc';
import { FaEye } from 'react-icons/fa';

//import images Product List Item
import imageProduct from './images/fruit-images-product.jpg';
import FuritProductsImage1 from './images/product_image_1.png';
import FuritProductsImage2 from './images/product_image_2.png';
import FuritProductsImage3 from './images/product_image_3.png';
import FuritProductsImage4 from './images/product_image_4.png';
import FuritProductsImage5 from './images/product_image_5.png';
import FuritProductsImage6 from './images/product_image_6.png';
//import icon hover list item

import { RiMotorbikeFill } from 'react-icons/ri';
import { MdOutlineSpeakerNotes } from 'react-icons/md';
import { GiGlassHeart } from 'react-icons/gi';
import { MdOutlinePayments } from 'react-icons/md';
import { GiRoundStar } from 'react-icons/gi';

export const images = {
    Logo,
    banner,
    banner2,
    imageProduct
};

export const Info = [
    {
        id: 1,
        component: <RiMotorbikeFill />,
        title: 'Free Delivery Across the US!',
        description: 'Free delivery for all orders above $100'
    },
    {
        id: 2,
        component: <MdOutlineSpeakerNotes />,
        title: 'Top-Notch Support',
        description: 'Chat with us if you’ve any questions'
    },
    {
        id: 3,
        component: <GiGlassHeart />,
        title: '100% Satisfaction Guarantee!',
        description: 'Providing help in case of dissatisfaction'
    },
    {
        id: 4,
        component: <MdOutlinePayments />,
        title: 'Secure Payments',
        description: 'We use safest payment technologies'
    }
];

export const FuritProducts = [
    {
        id: 1,
        menu_image: FuritProductsImage1,
        title: 'Radish  ',
        component_icon: <GiRoundStar />,
        price: 115.0
    },
    {
        id: 2,
        menu_image: FuritProductsImage2,
        title: 'Spinach  ',
        component_icon: <GiRoundStar />,
        price: 5.49
    },
    {
        id: 3,
        menu_image: FuritProductsImage3,
        title: 'Cauliflower   ',
        component_icon: <GiRoundStar />,
        price: 5.0
    },
    {
        id: 4,
        menu_image: FuritProductsImage4,
        title: 'Cabbage  ',
        component_icon: <GiRoundStar />,
        price: 1.48
    },
    {
        id: 5,
        menu_image: FuritProductsImage5,
        title: 'Pumpkin  ',
        component_icon: <GiRoundStar />,
        price: 1.59
    },
    {
        id: 6,
        menu_image: FuritProductsImage6,
        title: 'Orange  ',
        component_icon: <GiRoundStar />,
        price: 1.99
    }
];

export const iconHover = [
    <PiShoppingCartLight key='cart' />,
    <VscHeart key='wishlist' />,
    <FaEye key='eyes' />
];
