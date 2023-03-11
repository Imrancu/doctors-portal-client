import React from 'react';
import appointment from '../../../../assets/images/appointment.png';
import PrimaryButton from '../../../../components/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <section className='flex justify-center mt-24 rounded-lg' style={{
            background: `url(${appointment})`,
            backgroundSize: "cover"
        }}>
            <div className='p-12'>
                <h4 className='text-xl font-bold text-primary text-center'>Contact Us</h4>
                <h3 className='text-3xl mt-2 mb-7 text-center text-white'>Stay Connected With Us</h3>
                <input type="text" placeholder="Your Email" className="input input-bordered w-full" />
                <input type="text" placeholder="Your Password" className="input input-bordered w-full my-4" />
                <textarea className="textarea textarea-bordered w-full h-48" placeholder="Write Your Message Here"></textarea>
                <div className='flex justify-center mt-7'>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Contact;