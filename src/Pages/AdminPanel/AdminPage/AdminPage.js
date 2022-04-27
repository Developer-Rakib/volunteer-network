import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BsFolderPlus } from 'react-icons/bs'
import './AddminPage.css'

const AdminPage = () => {
    return (
        <div className='admin-container flex'>
            <div className='w-3/12'>
                <nav>
                    <ul>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/admin/volunteer"}>Volunteer list</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/admin/addEvent"}> <span><BsFolderPlus></BsFolderPlus></span> Add Event</NavLink>
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