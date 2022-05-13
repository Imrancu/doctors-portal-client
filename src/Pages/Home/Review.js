import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg shadow-xl mt-10">
            <div className="card-body">
                <p>{review.review}</p>
                <div className="flex items-center mt-6">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} />
                        </div>
                    </div>
                    <div className='ml-10'>
                        <h4 className='text-2xl'>{review.name}</h4>
                        <h5 className='text-md'>{review.location}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;