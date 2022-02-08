import axios from '../api/getApi';
import React, { useEffect, useState } from 'react';
import './Row.css'

const Row = ({ title, isLarge, fetchURL }) => {

    const [Movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchURL)

            setMovies(request.data.results)
        }

        fetchData()
    }, [fetchURL])

    console.log(Movies)


    return <div className='row'>
        <h2> {title} </h2>

        <div className="rowPoster">
            {
                Movies.map((movie) => {
                    return <img className={isLarge ? 'posterImage largePoster' : 'posterImage'} src={`https://image.tmdb.org/t/p/original/${isLarge ? movie.poster_path : movie.backdrop_path}`} alt="" />
                })
            }
        </div>
    </div>;
};

export default Row;
