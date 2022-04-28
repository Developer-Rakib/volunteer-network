import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SavedEvent from '../SavedEvent/SavedEvent';

const SavedEvents = () => {
    const [savedEvents, setSavedEvents] = useState([]);
    useEffect(() => {
        (async () => {
            const { data } = await axios.get("http://localhost:5000/SavedEvents")
            setSavedEvents(data)
        })()
    }, [])
    // console.log(savedEvents);

    return (

        <div className='flex justify-evenly container mx-auto mt-10 flex-wrap'>
            {
                savedEvents.map(event => <SavedEvent
                    key={event._id}
                    event={event}
                ></SavedEvent>)
            }
        </div>
    );
};

export default SavedEvents;