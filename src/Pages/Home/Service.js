import React from 'react';

const Service = ({icons , serviceTitle}) => {
    return (
        <div className="card shadow-xl">
            <figure className="px-4 pt-10">
                <img src={icons} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{serviceTitle}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default Service;