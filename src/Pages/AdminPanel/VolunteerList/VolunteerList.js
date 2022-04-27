import React from 'react';
import { MdDelete } from 'react-icons/md'

const VolunteerList = () => {
    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>

                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Registating Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-5 py-3 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                Md Tazul Islam
                            </th>
                            <td className="px-5 py-3">
                                tajulislam@gmail.com
                            </td>
                            <td className="px-5 py-3">
                                10/12/2022
                            </td>
                            <td className="px-5 py-3 text-center">
                                <button><MdDelete className='text-2xl'></MdDelete></button>
                            </td>
                        </tr>
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-5 py-3 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                Md Tazul Islam
                            </th>
                            <td className="px-5 py-3">
                                tajulislam@gmail.com
                            </td>
                            <td className="px-5 py-3">
                                10/12/2022
                            </td>
                            <td className="px-5 py-3 text-center">
                                <button><MdDelete className='text-2xl'></MdDelete></button>
                            </td>
                        </tr>
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-5 py-3 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                Md Tazul Islam
                            </th>
                            <td className="px-5 py-3">
                                tajulislam@gmail.com
                            </td>
                            <td className="px-5 py-3">
                                10/12/2022
                            </td>
                            <td className="px-5 py-3 text-center">
                                <button><MdDelete className='text-2xl'></MdDelete></button>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VolunteerList;