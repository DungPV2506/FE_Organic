import React, { useContext } from 'react';
import { SideBarContext } from '../../../../Contexts/SideBar';
import { images } from '../../../../Assets/assets';
import { FuritProducts } from '../../../../Assets/assets';
import { FaArrowRightLong } from 'react-icons/fa6';
import { PiShoppingCartLight } from 'react-icons/pi';
import { VscHeart } from 'react-icons/vsc';
import { FaEye } from 'react-icons/fa';
import './FruitList.scss';

const FruitList = () => {
    return (
        <div className='FruitList-Container'>
            <div className='fruitList-Product'>
                <img src={images.imageProduct} alt='' />
            </div>
            <div className='fruitList-Products-Item'>
                <div className='products-Item-title'>
                    <h2>Deal Of The Month</h2>
                    <span>
                        See All Deals
                        <FaArrowRightLong />
                    </span>
                </div>

                <div className='product-Items-List'>
                    {FuritProducts.map((item) => {
                        return (
                            <div className='list-Item-Img'>
                                <img src={item.menu_image} alt='' />
                                <h3>{item.title}</h3>
                                <p>{item.component_icon}</p>
                                <span>${item.price}</span>
                            </div>
                        );
                    })}
                    <div className='product-Items-List-Icon'>
                        <ul>
                            <li>
                                <PiShoppingCartLight />
                            </li>

                            <li>
                                <VscHeart />
                            </li>

                            <li>
                                <FaEye />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='total-Item'>
                    <p>Available: 16</p>
                    <p>Sold: 18</p>
                </div>
            </div>
        </div>
    );
};

export default FruitList;
