import React from 'react';
import img from '../../assets/images/doctor-small.png';
import Button from '../Shared/Button/Button';

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center rounded-lg bg-appointment mt-28'>
            <div className='flex-1 hidden lg:block'>
                <img className='-mt-20' src={img} alt="" />
            </div>
            <div className='flex-1 p-10'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-white text-3xl mt-5'>Make an appointment Today</h2>
                <p className='text-white py-5 mr-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button>Get Started</Button>
            </div>
        </section>
    );
};

export default MakeAppointment;