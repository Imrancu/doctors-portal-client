import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import bg from '../../../assets/images/bg.png'

const Banner = () => {
    return (
        <section className='py-24' style={{
            background: `url(${bg})`,
            backgroundSize: 'contain',
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='chair' />
                    <div className='md:mt-8 sm:mt-8'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;