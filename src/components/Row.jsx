import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import {HiChevronRight, HiChevronLeft} from 'react-icons/hi';

const Row = ({title, fetchURL, rowID}) => {
  const [movies, setMovies] = useState([]);

useEffect(() => {
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
      <h2 className='flex relative z-10 items-center p-4 font-bold drop-shadow-md duration-300 text-tanpal-400 justify-left md:text-xl'>{title}</h2>
      <div className='flex relative items-center group'>
        <div id={'slider' + rowID} className='overflow-x-scroll relative mr-12 ml-12 w-full h-full whitespace-nowrap scroll-smooth scrollbar-hide'>
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
            <HiChevronLeft onClick={slideLeft} className='absolute top-[43%] left-0 text-tanpal-600 opacity-100 hidden hover:opacity-75 group-hover:block cursor-pointer z-10 duration-300' size={40}/>
            <HiChevronRight onClick={slideRight} className='absolute top-[43%] right-0 text-tanpal-600 opacity-100 hidden hover:opacity-75 group-hover:block cursor-pointer z-10 duration-300' size={40}/>
      </div>
    </>
  )
}

export default Row