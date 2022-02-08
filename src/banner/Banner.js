import React, { useEffect, useState } from 'react';
import './Banner.css'
import axios from '../api/getApi'
import myRequests from '../api/request';

const Banner = () => {

    const [Movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(myRequests.fetchNetflixOriginals)

            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
        }

        fetchData()
    }, [])

    return <div className='banner' style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${Movie?.poster_path}')` }}>
        <div className="bannerContent">
            <h1 className="bannerTitle">
                {Movie?.name}
            </h1>

            <div className="bannerButtons">
                <button>Play</button>
                <button>My List</button>
            </div>

            <div className="bannerDescription">
                <p> {Movie?.overview} </p>
            </div>
        </div>

        <div className="bannerFade"></div>
    </div>;
};

export default Banner;
