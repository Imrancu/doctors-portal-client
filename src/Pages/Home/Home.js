import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Exceptional from './Exceptional';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
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