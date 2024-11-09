import React from 'react';
import { images } from '../../../Assets/assets';
import './Banner.scss';

const Banner = () => {
    return (
        <div className='bannerContainer'>
            <div className='banner-left'>
                <div className='image-banner'>
                    <img
                        className='image-banner-right'
                        src={images.banner2}
                        alt=''
                    />
                </div>
                <div className='bannerTextLeft'>
                    <p> Welcome To XStore </p>
                    <h2>We Delivery on Next Day from 10:00 AM to 08:00 PM</h2>
                    <span>*For free shipping orders starts from $100</span>
                </div>
            </div>

            {/*  */}
            <div className='banner-right'>
                <div className='image-banner'>
                    <img
                        className='image-banner-right'
                        src={images.banner}
                        alt=''
                    />
                </div>
                <div className='bannerTextRight'>
                    <p> Limited Time Deals </p>
                    <h2>
                        Save 15% on Vegetable, Seafood and Beverages Products
                        Now!
                    </h2>
                    <span>Join our newsletter and get $20 discount...</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;
