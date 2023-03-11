import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Treatment = () => {
    return (
        <div className='p-24'>
            <div className="grid lg:grid-cols-2 gap-32">
                <figure><img className='rounded-lg' src={treatment} alt="Treatment" /></figure>
                <div className='flex items-center'>
                    <div>
                        <h2 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h2>
                        <p className='my-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;