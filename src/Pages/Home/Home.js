import React from 'react';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Exceptional from './Exceptional';
import Footer from './Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Info/>
            <Services/>
            <Exceptional/>
            <MakeAppointment/>
            <Testimonial/>
            <ContactForm/>
            <Footer/>
        </div>
    );
};

export default Home;