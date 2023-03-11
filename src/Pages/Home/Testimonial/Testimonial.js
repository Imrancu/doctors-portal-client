import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Reviews from './Reviews';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            description: 'I had a fantastic experience at my dental appointment today! The staff were friendly and knowledgeable, and the dentist was very thorough in explaining everything that was going on with my teeth. I would highly recommend this practice.',
            location: 'California',
            image: people1
        },
        {
            _id: 2,
            name: "Lorry Page",
            description: "I've been going to this dental office for years, and I'm always impressed with their level of care. The hygienists are gentle yet thorough, and the dentists are always up-to-date on the latest technology and techniques.",
            location: 'California',
            image: people2
        },
        {
            _id: 3,
            name: "Merry Pose",
            description: 'I was really impressed with the cleanliness of the dental office I visited. They clearly take hygiene seriously, and I felt very safe during my appointment. The staff were also friendly and efficient, and I was in and out in no time.',
            location: 'Los Angels',
            image: people3
        },
    ]
    return (
        <section className='mt-16'>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-xl font-bold text-primary'>Testimonial</h4>
                    <h3 className='text-4xl mt-2'>What Our Patients Says</h3>
                </div>
                <img className='lg:w-48 w-44' src={quote} alt="Quote" />
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Reviews
                    key={review._id}
                    review={review}
                    ></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonial;