import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Main = () => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(()=> {
        axios.get(requests.requestPopular, {
            headers: {
                'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
                'content-type': 'application/json;charset=utf-8'
            }
        }).then((response)=>{
            setMovies(response.data.results);
        })
    },[]);
//    console.log(movie);

    const truncateMovie = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + ' ...';
        } else {
            return str;
        }
    }

  return (
    <div className='w-full h-[550px] text-tanpal-500 z-0'>
        <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-t from-blapal-500'></div>
        <img className='object-cover w-full h-full' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl font-bold md:text-5xl'>{movie?.title}</h1>
                <div className='my-4'>
                    <Link to='/watch'>
                        <button className='px-6 py-1 rounded text-tanpal-500 bg-purpal-500 hover:bg-purpal-600 hover:text-blapal-800'>Play</button>
                    </Link>
                    <button className='px-5 py-1 ml-4 rounded border border-tanpal-500 text-tanpal-500 hover:bg-tanpal-500/75 hover:border-none hover:text-blapal-800'>Watch Later</button>
                </div>
                <p className='text-sm text-tanpal-600'>Released: {movie?.release_date}</p>
                <p className='mt-1 text-sm text-tanpal-600'>Rating: {movie?.vote_average}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-tanpal-500 mt-2'>{truncateMovie(movie?.overview, 300)}</p>
            </div>
        </div>
    </div>
  )
}

export default Main