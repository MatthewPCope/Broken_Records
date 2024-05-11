import Shows from "./Shows"


function Hero() {
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
                    <h1>The Broken Records</h1>
                    <p>A Carmel Valley-based rock group comprised of three beleaguered dads playing grunge and alternative classics from the 90’s and beyond.</p>
                    <a href="/upcomingshows" class="btn">Upcoming Shows</a>
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

export default Hero