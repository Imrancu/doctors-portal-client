import React from 'react';
import img from '../../assets/images/treatment.png';
import Button from '../Shared/Button/Button';

const Exceptional = () => {
    return (

        <section className='md:flex justify-center items-center pt-24 px-20'>
            <div className='flex-1 pr-14'>
                <img className='rounded-lg' src={img} alt="" />
            </div>
            <div className='flex-1'>
                <h2 className="text-3xl font-bold">Exceptional Dental Care,<br /> on Your Terms</h2>
                <p className='py-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div>
                    <Button>Get Started</Button>
                </div>
            </div>
        </section>
    );
};

export default Exceptional;