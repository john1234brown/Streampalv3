import {UserAuth} from '../context/AuthContext'
import React, { useState, useEffect } from 'react'
import { BsFullscreen, BsFullscreenExit, BsFillPlayFill, BsPauseFill, BsVolumeUpFill, BsVolumeMuteFill } from 'react-icons/bs';
import { movieID } from '../components/Movie';

const Watch = () => {
    const [movies, setMovies] = useState([]);
    const [fullscreen, fullscreenExit] = useState(false);
    const [play, pauseVideo] = useState(false);

  return (
    <>
        <div className='w-screen h-screen'>
              <iframe src="https://vidsrc.me/embed/movie?tmdb=" frameborder="0"></iframe>
            <div className='bg-black/0'>
            {fullscreen ? <BsFullscreenExit className='absolute right-4 bottom-4 text-2xl text-gray-300' /> : <BsFullscreen className='absolute right-4 bottom-4 text-2xl text-gray-300' />}
            {fullscreen ? <BsPauseFill className='absolute bottom-4 left-4 text-3xl text-gray-300' /> : <BsFillPlayFill className='absolute bottom-4 left-4 text-3xl text-gray-300' />}
            {fullscreen ? <BsVolumeMuteFill className='absolute bottom-4 left-16 text-3xl text-gray-300' /> : <BsVolumeUpFill className='absolute bottom-4 left-16 text-3xl text-gray-300' />}
            </div>
        </div>
    </>
  )
}

export default Watch