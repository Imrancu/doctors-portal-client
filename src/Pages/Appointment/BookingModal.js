import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {

    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box border-4 border-primary">
                    <h3 className="font-bold text-lg text-primary my-5 text-center ">Booking For: {name}</h3>
                    <label htmlFor="booking-modal" className="btn btn-sm bg-gradient-to-l from-secondary to-primary text-white font-bold btn-circle absolute right-2 border-none top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center'>
                        <input type="text" readOnly value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option 
                                    key={index}
                                    value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" placeholder="Type here" className="btn btn-secondary text-white input-bordered w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;