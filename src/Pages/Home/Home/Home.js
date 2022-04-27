import React from 'react';
import Event from '../../Event/Event';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <h2 className="text-3xl font-semibold mb-3">I grow by helping people in need.</h2>
            <div className="w-2/5 mx-auto">
                <div className="mt-1 flex rounded-md border">
                    <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full py-2 px-2 rounded sm:text-sm border-gray-300"
                        placeholder="Search.."
                    />
                    <button className="inline-flex items-center px-3 rounded-r-md  bg-sky-500 border-l-0 border border-gray-300 text-white text-sm">
                        Search
                    </button>
                </div>
            </div>

            <div className='event-container flex justify-evenly venly mt-10'>
                <Event></Event>
            </div>
        </div>
    );
};

export default Home;