import React from 'react';

const Event = ({ event }) => {
    return (
        <>
            <div className='relative w-64 m-5 rounded-md overflow-hidden'>
                <img className='w-full' src={event.img} alt="" />
                <p className='w-100 py-4 absolute bottom-0 left-0 right-0 bg-yellow-400 text-white '>{event.title}</p>
            </div>

        </>
    );
};

export default Event;