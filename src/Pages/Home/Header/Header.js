import { Link as button, NavLink, useNavigate } from 'react-router-dom';
import "./Header.css";
import logo from '../../../img/logos/Group 1329.png'
import { useState } from 'react';
import auth from '../../../firebase.init.js';
import { GoThreeBars } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';


const Header = () => {
    let [toggle, setToggle] = useState(false);

    let [user] = useAuthState(auth)
    let navigat = useNavigate();

    // console.log(user);
    // console.log(user?.photoURL);



    const navBtnHndle = () => {
        setToggle(!toggle)
    }
    const handleAdminBtn = () => {
        navigat('./admin/volunteer')
    }
    const handleRegister = () => {
        navigat("/register")
    }
    const handleLogout = () => {
        signOut(auth).then(() => {
            toast.success('Logged Out!', { id: "logOut" })
            navigat("/login")

        }).catch((error) => {
            console.log(error.message);
        });

    };

    return (
        <div className='header-container z-10 sticky sm:pt-3 sm:pb-4  nav flex px-5 md:px-10 lg:px-20 justify-between items-center'>
            <div className="logo">
                <img className='w-48' src={logo} alt="" />
            </div>
            <nav onClick={() => setToggle(!toggle)}>
                <span onClick={navBtnHndle} className='sm:hidden absolute right-8 top-5'>{toggle ? <GrClose></GrClose> : <GoThreeBars></GoThreeBars>}</span>
                <ul className={`flex flex-col sm:flex-row absolute left-0 justify-center sm:relative sm:opacity-100 sm:top-0 bg-white sm:bg-inherit w-full py-2 duration-500 ease-out ${toggle ? "top-12 opacity-100" : "top-[-250px] opacity-0"}`}>
                    <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/"}>HOME</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/savedEvent"}>Saved Event</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/about"}>ABOUT</NavLink>

                    <button onClick={handleAdminBtn} className='px-5 pb-1 pt-2 bg-black text-white rounded'>Admin</button>
                    {user ?
                        <div className="user flex items-center">
                            <img src={user.photoURL ? user.photoURL : "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"} alt="" />
                            {user?.displayName ?
                                <p>{
                                    user?.displayName?.length < 10 ?
                                        user?.displayName :
                                        `${user?.displayName.slice(0, 10)}...`
                                }</p>
                                :
                                ""
                            }
                            <button onClick={handleLogout}>LogOut</button>
                        </div>
                        :
                        <button className='px-5 pb-1 pt-2 mx-2  bg-sky-600 text-white rounded' onClick={handleRegister}>Register</button>

                    }
                </ul>

            </nav>
        </div >
    );
};

export default Header;