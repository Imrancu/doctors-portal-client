import React from 'react';
import quote from '../../assets/icons/quote.svg';
import img1 from '../../assets/images/people1.png';
import img2 from '../../assets/images/people2.png';
import img3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id:1,
            name: "Wiliam Smith",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: img1,
            location: "California"
        },
        {
            _id:2,
            name: "Merry Cetty",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: img2,
            location: "Malborne"
        },
        {
            _id:3,
            name: "Nusrat Jahan",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: img3,
            location: "Dhaka"
        },
    ]

    return (
        <section className='my-24'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl text-primary font-bold'>Testimonial</h3>
                    <h2 className='text-2xl mb-7'>What Our Patients Say</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    />)
                }
            </div>
        </section>
    );
};

export default Testimonial;