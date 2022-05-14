import React from 'react';

const BookService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="card-title text-secondary text-2xl mx-auto">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ?
                            <span>{slots[0]}</span>
                            :
                            <span className='text-red-500'>No Slot Available</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <label
                    for="booking-modal"
                    class="btn btn-primary bg-gradient-to-l from-secondary to-primary text-white font-bold"
                    disabled={slots.length === 0}
                    onClick={() => setTreatment(service)}
                >Book Appointment</label>


            </div>
        </div>
    );
};

export default BookService;