import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 AM to 5.00 PM Everyday.',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            id: 2,
            name: 'Our Location',
            description: 'Safa Bhaban, Dewanhat, Chattogram, Bangladesh',
            icon: marker,
            bgClass: 'bg-neutral'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'We are available 24/7',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-secondary to-primary'
        },
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;