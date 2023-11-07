import React, { useEffect, useState } from 'react';
import {HiChevronRight, HiChevronLeft, HiTrash} from 'react-icons/hi';
import {UserAuth} from '../context/AuthContext'
import {db} from '../firebase'
import {updateDoc, doc, onSnapshot} from 'firebase/firestore'

const SavedShows = () => {
    const [movies, setMovies] = useState([])
    const {user} = UserAuth()

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows);
        })
    }, [user?.email]);

    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedID) => {
        try {
            const result = movies.filter((item) => item.id !== passedID)
            await updateDoc(movieRef, {
                savedShows: result,
            });
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
    <h2 className='flex relative z-10 items-center p-4 font-bold drop-shadow-md text-tanpal-500 justify-left md:text-xl'>My Shows</h2>
      <div className='flex relative items-center group'>
        <div id={'slider'} className='overflow-x-scroll relative mr-12 ml-12 w-full h-full whitespace-nowrap scroll-smooth scrollbar-hide'>

          {movies.map((item, id) => (
            <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 z-8'>
                <img className='block w-full h-full' src={`https://image.tmdb.org/t/p/w500/${item.img}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full opacity-0 duration-300 text-tanpal-500 hover:bg-blapal-500/80 hover:opacity-100'>
                <p className='flex justify-center items-center h-full text-xs font-bold text-center duration-300 white-space-normal md:text-sm'>{item?.title}</p>
                <p onClick={()=> deleteShow(item.id)} className='absolute top-4 left-4 text-[1.25rem] duration-300 text-tanpal-600 hover:text-red-600'><HiTrash /></p>
            </div>
            </div>
          ))}
        </div>
            <HiChevronLeft onClick={slideLeft} className='absolute top-[43%] left-0 text-tanpal-500 opacity-100 hidden hover:opacity-75 group-hover:block cursor-pointer z-10 duration-300' size={40}/>
            <HiChevronRight onClick={slideRight} className='absolute top-[43%] right-0 text-tanpal-500 opacity-100 hidden hover:opacity-75 group-hover:block cursor-pointer z-10 duration-300' size={40}/>
      </div>
    </>
  )
}

export default SavedShows