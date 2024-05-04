import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <h1>The Broken Records</h1>
                <div>
                    <a href="https://reverb.com/">Upcoming Shows</a>
                    <a href="https://sweetwater.com">About</a>
                </div>
            </div>
        </>
    )
}

export default Navbar