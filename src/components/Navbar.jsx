import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <h2>Broken Records</h2>
                <div>
                    <Link><a href="www.reverb.com">Reverb</a></Link>
                    <a href="www.sweetwater.com">Sweetwater</a>
                </div>
            </div>
        </>
    )
}

export default Navbar