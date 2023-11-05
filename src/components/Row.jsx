import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import {HiChevronRight, HiChevronLeft} from 'react-icons/hi';

const Row = ({title, fetchURL, rowID}) => {
  const [movies, setMovies] = useState([]);

  useEffect(()=> {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    })
  },[fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <>
      <h2 className='relative drop-shadow-md flex justify-left items-center text-white font-bold md:text-xl p-4 z-10'>{title}</h2>
      <div className='relative flex items-center group bg-gradient-to-br from-white/5'>
        <div id={'slider' + rowID} className='relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {movies.map((item, id) => (
            <Movie key={id} item={item}/>
          ))}
        </div>
          <div onClick={slideLeft} className='w-10 h-[94.52%] mb-1 left-0 z-9 items-center bg-black opacity-25 absolute hover:opacity-75 cursor-pointer hidden group-hover:block'>
            <HiChevronLeft className='absolute top-[43%] text-white opacity-25 group-hover:opacity-95 cursor-pointer  z-10 hidden group-hover:block' size={40}/>
          </div>
          <div onClick={slideRight} className='w-10 h-[94.52%] mb-1 right-0 z-9 items-center bg-black opacity-25 absolute hover:opacity-75 cursor-pointer hidden group-hover:block'>
            <HiChevronRight className='absolute top-[43%] text-white opacity-25 group-hover:opacity-95 cursor-pointer  z-10 hidden group-hover:block' size={40}/>
          </div>
      </div>
    </>
  )
}

export default Row