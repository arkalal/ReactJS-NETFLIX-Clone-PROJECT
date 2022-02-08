import React from 'react';
import './Banner.css'

const Banner = () => {
    return <div className='banner'>
        <div className="bannerContent">
            <h1 className="bannerTitle">
                Movie Name
            </h1>

            <div className="bannerButtons">
                <button>Play</button>
                <button>My List</button>
            </div>

            <div className="bannerDescription">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa minus, inventore tempore sit eius deleniti?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, quam!</p>
            </div>
        </div>
    </div>;
};

export default Banner;
