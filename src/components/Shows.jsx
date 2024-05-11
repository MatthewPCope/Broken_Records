import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Shows() {
    return (
        <>
        <div className="header">
            {/* <div className="container">
                <div class="navbar">
                    <div >
                        <img className="logo-image" src="./assets/The_Broken_logo.jpg" alt="" />
                    </div>
                    <div>NAVIGATION</div>
                </div>
            </div> */}
            <div className="header-container">
                <div className="header-container-inner">
                    <h1>May 25th </h1>
                    <h2>The Winehouse</h2>
                    <p>Carmel Valley, CA</p>
                    <a href="/" class="btn">Home</a>
                </div>
            </div>
            
            
            {/* <div>
                <div class="container">
                    <h2>Some random heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus adipisci animi porro error, suscipit minus quam mollitia blanditiis voluptatibus facere perspiciatis a architecto pariatur ratione enim molestiae totam culpa?</p>
                </div>
            </div> */}
        </div>
        
    </>
    )
}

export default Shows