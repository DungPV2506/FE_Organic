import React from 'react';
import { Info } from '../../../../Assets/assets';
import './Features.scss';

const Features = () => {
    return (
        <div className='FeaturesContainer'>
            {Info.map((item, index) => {
                return (
                    <div className='Info-contents'>
                        <h2>{item.component}</h2>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Features;
