import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import './AddminPage.css'

const AdminPage = () => {
    return (
        <div className='admin-container flex'>
            <div className='w-3/12'>
                <nav>
                    <ul>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/admin/volunteer"}> <span><FiUsers></FiUsers></span> Volunteer List</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/admin/addEvent"}> <span><AiOutlinePlus></AiOutlinePlus></span> Add Event</NavLink>
                        </li>

                    </ul>
                </nav>
            </div>
            <div className='bg-gray-100 w-9/12'>
                <div className='admin-item'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;