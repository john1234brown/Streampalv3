import React, { useState } from 'react'
import { BsFullscreen, BsFullscreenExit, BsFillPlayFill, BsPauseFill, BsVolumeUpFill, BsVolumeMuteFill } from 'react-icons/bs';

const Watch = () => {

    const [fullscreen, fullscreenExit] = useState(false);
    const [play, pauseVideo] = useState(false);

  return (
    <>
        <div className='h-screen w-screen'>
            <video controls autoPlay name='media' className='w-screen h-screen aspect-video'>
                <source src='https://ia902602.us.archive.org/23/items/Winds_of_the_Wasteland/Winds_of_the_Wasteland.mp4' type='video/mp4' />
            </video>
            <div className='bg-black/0'>
            {fullscreen ? <BsFullscreenExit className='absolute bottom-4 right-4 text-2xl text-gray-300' /> : <BsFullscreen className='absolute bottom-4 right-4 text-2xl text-gray-300' />}
            {fullscreen ? <BsPauseFill className='absolute bottom-4 left-4 text-3xl text-gray-300' /> : <BsFillPlayFill className='absolute bottom-4 left-4 text-3xl text-gray-300' />}
            {fullscreen ? <BsVolumeMuteFill className='absolute bottom-4 left-16 text-3xl text-gray-300' /> : <BsVolumeUpFill className='absolute bottom-4 left-16 text-3xl text-gray-300' />}
            </div>
        </div>
    </>
  )
}

export default Watch