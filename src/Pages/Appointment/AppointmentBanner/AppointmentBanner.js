import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    

    return (
        <header className='py-20' style={{
            background: `url(${bg})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='chair' className="lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='bg-white p-5 rounded-xl mr-6'>
                        <DayPicker
                            mode='single'
                            selectedDate={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;