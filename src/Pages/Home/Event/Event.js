import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { BsFolderPlus } from 'react-icons/bs'

const Event = ({ event }) => {

    const handleSavedEvent = async (ev) => {
        const event = {
            title: ev.title,
            img: ev.img,
            eventDate: ev.eventDate,
            description: ev.description
        }
        // console.log(event);
        try {
            const { data } = await axios.post("https://damp-crag-51052.herokuapp.com/SavedEvents", event)
            console.log(data);
            if (!data.success) {
                toast.error(data.message)
            }
            toast.success(data.message)
        }
        catch (error) {
            console.log(error);
        }

    }
    return (
        <>
            <div className='relative w-64 m-5 rounded-md overflow-hidden'>
                <div>
                    <img className='w-full' src={event.img} alt="" />
                    <p className='w-100 py-4 absolute bottom-0 left-0 right-0 bg-yellow-400 text-white '>{event.title}</p>
                </div>
                <div
                    className="absolute top-0 right-0 w-full h-full text-white bg-black opacity-0 z-10 hover:opacity-50 transition flex justify-center items-center "
                >
                    <button
                        onClick={() => handleSavedEvent(event)}
                        className='text-white text-4xl'
                    ><BsFolderPlus></BsFolderPlus></button>
                </div>
            </div>

        </>
    );
};

export default Event;