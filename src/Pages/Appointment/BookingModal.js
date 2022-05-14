import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box border-4 border-primary">
                    <h3 class="font-bold text-lg text-primary my-5 text-center ">Booking For: {name}</h3>
                    <label for="booking-modal" class="btn btn-sm bg-gradient-to-l from-secondary to-primary text-white font-bold btn-circle absolute right-2 border-none top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center'>
                        <input type="text" readOnly value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" placeholder="Type here" class="btn btn-secondary text-white input-bordered w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;