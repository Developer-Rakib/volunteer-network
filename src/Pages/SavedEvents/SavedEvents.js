import React from 'react';
import SavedEvent from '../SavedEvent/SavedEvent';

const SavedEvents = () => {
    return (

        <div className='flex justify-evenly container mx-auto mt-10 flex-wrap'>
            <SavedEvent></SavedEvent>
        </div>
    );
};

export default SavedEvents;