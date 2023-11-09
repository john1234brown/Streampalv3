import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import Movie from './Movie';
import {HiChevronRight, HiChevronLeft} from 'react-icons/hi';

const Row = ({title, fetchURLs, rowID}) => {
  const [movies, setMovies] = useState([]);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(fetchURLs.map(url => axios.get(url)));
        const allMovies = responses.flatMap(response => response.data.results);
        setMovies(allMovies);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [fetchURLs]);
  
  const slideLeft = () => {
    const slider = document.getElementById('slider' + rowID);
    const newPosition = scrollPos - 1000 < 0 ? slider.scrollWidth - slider.offsetWidth : scrollPos - 1000;
    setScrollPos(newPosition);
    slider.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
  };

  const slideRight = () => {
    const slider = document.getElementById('slider' + rowID);
    const newPosition = scrollPos + 1000 > slider.scrollWidth - slider.offsetWidth ? 0 : scrollPos + 1000;
    setScrollPos(newPosition);
    slider.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <h2 className='flex relative items-center p-4 font-bold drop-shadow-md duration-300 z-5 text-tanpal-400 justify-left md:text-xl'>{title}</h2>
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