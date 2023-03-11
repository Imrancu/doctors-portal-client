import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-16 rounded-lg' style={{
            background: `url(${appointment})`,
            backgroundSize: 'cover'
        }}>
            <div className="hero">
                <div className="hero-content p-0 flex-col lg:flex-row">
                    <img src={doctor} alt='doctor' className="lg:w-1/2 hidden lg:block rounded-lg -mt-24" />
                    <div className='p-10'>
                        <h3 className='text-primary text-xl font-bold'>Appointment</h3>
                        <h2 className='text-3xl font-semibold mt-2 text-white'>Make an appointment Today</h2>
                        <p className='lg:text-left my-5 text-white pr-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;