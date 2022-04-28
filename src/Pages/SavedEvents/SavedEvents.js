import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SavedEvent from '../SavedEvent/SavedEvent';
import toast from 'react-hot-toast';

const SavedEvents = () => {
    const [savedEvents, setSavedEvents] = useState([]);
    useEffect(() => {
        (async () => {
            const { data } = await axios.get("https://damp-crag-51052.herokuapp.com/SavedEvents")
            setSavedEvents(data)
        })()
    }, [])

    const handleDelete = (id) => {
        axios.delete(`https://damp-crag-51052.herokuapp.com/SavedEvents/${id}`)
            .then(res => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    const newEvents = savedEvents.filter(event => event._id != id)
                    setSavedEvents(newEvents)
                }
            })
    }
    // console.log(savedEvents);

    return (

        <div className='flex justify-evenly container mx-auto mt-10 flex-wrap'>
            {
                savedEvents.map(event => <SavedEvent
                    key={event._id}
                    event={event}
                    handleDelete={handleDelete}
                ></SavedEvent>)
            }
        </div>
    );
};

export default SavedEvents;