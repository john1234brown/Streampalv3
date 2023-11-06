import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import {HiChevronRight, HiChevronLeft} from 'react-icons/hi';

const Row = ({title, fetchURL, rowID}) => {
  const [movies, setMovies] = useState([]);

  useEffect(()=> {
    axios.get(fetchURL, {
      headers: {
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTljY2JkNDViNmY1MTJjN2E0YWZmMzA5MjIxZDgyOCIsInN1YiI6IjYzZDBhM2M3NjZhZTRkMDA5ZTlkZjY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N5j1M7YnwmMTjIWMdYQbdh5suW2hCDucbqlDgMku_UA',
          'content-type': 'application/json;charset=utf-8'
      }
  }).then((response) => {
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
      <h2 className='relative drop-shadow-md flex justify-left items-center text-white font-bold md:text-xl p-4 z-10 duration-300'>{title}</h2>
      <div className='relative flex items-center group bg-gradient-to-br from-white/5'>
        <div id={'slider' + rowID} className='ml-12 mr-12 relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {movies.map((item, id) => (
            <Movie key={id} item={item}/>
          ))}
        </div>
            <HiChevronLeft onClick={slideLeft} className='absolute top-[43%] left-0 text-white opacity-50 hidden hover:opacity-75 group-hover:block cursor-pointer z-10 duration-300' size={40}/>
            <HiChevronRight onClick={slideRight} className='absolute top-[43%] right-0 text-white opacity-50 hidden hover:opacity-75 group-hover:block cursor-pointer z-10 duration-300' size={40}/>
      </div>
    </>
  )
}

export default Row