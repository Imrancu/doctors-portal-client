import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card shadow-xl my-12 text-center">
            <div className="card-body">
                <h2 className="text-2xl font-semibold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Date'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div>                
                    <label
                    disabled={slots.length === 0}
                    onClick={() => setTreatment(appointmentOption)}
                    htmlFor="booking-modal" 
                    className="btn border-none text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;