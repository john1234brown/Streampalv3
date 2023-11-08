import {UserAuth} from '../context/AuthContext'
import React, { useState, useEffect } from 'react'
import { BsFullscreen, BsFullscreenExit, BsFillPlayFill, BsPauseFill, BsVolumeUpFill, BsVolumeMuteFill } from 'react-icons/bs';
import { movieID } from '../components/Movie';

const Watch = () => {
    const [movies, setMovies] = useState([]);
    const [fullscreen, fullscreenExit] = useState(false);
    const [play, setPlay] = useState(false);
    const [movieIdents, setMovieIdents] = useState([]);

    useEffect(() => {
      const storedMovieID = JSON.parse(sessionStorage.getItem('movieID'));
      if (storedMovieID) {
        setMovieIdents([storedMovieID]);
      }
    }, []);

  return (
    <>
        <div className='w-screen h-screen'>
          {movieIdents && (
              <iframe
              src={`https://vidsrc.me/embed/movie?tmdb=${movieIdents}`}
              allowFullScreen
              className='w-full h-full'
            />
          )}
          {/*  <div className='bg-black/0'>
            {fullscreen ? <BsFullscreenExit className='absolute right-4 bottom-4 text-2xl text-gray-300' /> : <BsFullscreen className='absolute right-4 bottom-4 text-2xl text-gray-300' />}
            {fullscreen ? <BsPauseFill className='absolute bottom-4 left-4 text-3xl text-gray-300' /> : <BsFillPlayFill className='absolute bottom-4 left-4 text-3xl text-gray-300' />}
            {fullscreen ? <BsVolumeMuteFill className='absolute bottom-4 left-16 text-3xl text-gray-300' /> : <BsVolumeUpFill className='absolute bottom-4 left-16 text-3xl text-gray-300' />}
          </div> */}
        </div>
    </>
  )
}

export default Watch