import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div className={`card lg:card-side shadow-xl p-6 text-white ${bgClass}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body md:text-center">
                <h2 className="lg:card-title text-xl font-bold">{name}</h2>
                <p className='lg:text-left'>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;