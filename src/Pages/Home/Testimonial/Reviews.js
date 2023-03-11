import React from 'react';

const Reviews = ({ review }) => {
    const { name, image, description, location } = review;
    return (
        <div className="card shadow-xl mt-16">
            <div className="card-body">
                <p>{description}</p>
                <div className="flex items-center mt-4">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} alt='profile' />
                        </div>
                    </div>
                    <div className='ml-7'>
                        <h3 className='2xl font-semibold'>{name}</h3>
                        <h4 className='xl'>{location}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;