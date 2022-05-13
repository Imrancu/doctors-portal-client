import React from 'react';
import img from '../../assets/images/chair.png';
import Button from '../Shared/Button/Button';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-hero-pattern">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;