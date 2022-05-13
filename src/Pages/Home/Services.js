import React from 'react';
import icon2 from '../../assets/images/cavity.png';
import icon1 from '../../assets/images/fluoride.png';
import icon3 from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    return (
        <div className='mt-24 text-center'>
            <h5 className='text-sm text-primary uppercase font-bold'>Our Services</h5>
            <h2 className='text-2xl mb-7'>Services We Provide</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <Service serviceTitle="Fluoride Treatment" icons={icon1} />
                <Service serviceTitle="Cavity Filling" icons={icon2} />
                <Service serviceTitle="Teeth Whitening" icons={icon3} />
            </div>
        </div>
    );
};

export default Services;