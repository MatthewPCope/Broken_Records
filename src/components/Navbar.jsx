import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <h1>The Broken Records</h1>
                <div className='links'>
                    <Link to={"/upcomingshows"}>
                        <p>Upcoming Shows</p>
                    </Link>
                    <Link to={"/about"}>
                        <p>About</p>
                    </Link>
                    <Link to={"/"}>
                        <p>Home</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar