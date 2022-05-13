import React from 'react';
import Button from '../Shared/Button/Button';

const ContactForm = () => {
    return (
        <section className='bg-appointment rounded-lg text-center py-8'>
            <h3 className='text-xl text-primary font-bold '>Contact</h3>
            <h2 className='text-white text-3xl mb-4'>Stay Connected With Us</h2>
            <form>
                <input className='mt-8 w-96 py-2 rounded-lg px-3' placeholder='Email Address' type="text" name="" /> <br />
                <input className='mt-8 w-96 py-2 rounded-lg px-3' placeholder='Subject' type="text" name="" /> <br />
                <textarea className='mt-8 w-96 py-2 mb-6 rounded-lg px-3' placeholder='Write Your Message' name=""></textarea> <br />
                <Button>Submit</Button>            
            </form>
        </section>
    );
};

export default ContactForm;