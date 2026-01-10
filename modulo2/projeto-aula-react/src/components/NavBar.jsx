import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav >
                <ul className='flex flex-row gap-4 p-2 justify-center text-xl'>
                    <li>
                        <Link to={'/'} className='hover:text-blue-700'>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'} className='hover:text-blue-700'>About</Link>
                    </li>
                    <li>
                        <Link to={'/contact'} className='hover:text-blue-700'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;