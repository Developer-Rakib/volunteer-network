import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

const SavedEvent = ({ event, handleDelete }) => {

    return (
        <div
            className="flex w-96 text-left bg-white mx-16 my-10 rounded-lg border shadow-md md:flex-row md:max-w-md">
            <img
                className="object-cover w-full h-96 rounded-t-lg md:h-40 md:w-48 md:rounded-none md:rounded-l-lg"
                src={event?.img}
                alt="" />
            <div
                className="flex flex-col mt-1 p-4 w-full leading-normal relative">
                <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{event?.title}</h3>
                <h5 className="mb-3 font-semibold text-gray-700 dark:text-gray-400">{event?.eventDate}</h5>
                <button onClick={() => handleDelete(event._id)} className='absolute bottom-5 right-8 px-4 py-2 bg-gray-400 hover:bg-sky-500 text-white rounded'>Cancel</button>
            </div>
        </div>

    );
};

export default SavedEvent;