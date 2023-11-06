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
    <h2 className='relative drop-shadow-md flex justify-left items-center text-white font-bold md:text-xl p-4 z-10'>My Shows</h2>
      <div className='relative flex items-center group bg-gradient-to-br from-white/5'>
        <div id={'slider'} className='ml-12 mr-12 relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>

          {movies.map((item, id) => (
            <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 z-8'>
                <img className='w-full h-full block' src={`https://image.tmdb.org/t/p/w500/${item.img}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white duration-300'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center duration-300'>{item?.title}</p>
                <p onClick={()=> deleteShow(item.id)} className='absolute text-gray-300 text-2xl hover:text-red-600 duration-300 top-4 right-0'><HiTrash /></p>
            </div>
            </div>
          ))}
        </div>
            <HiChevronLeft onClick={slideLeft} className='absolute top-[43%] left-0 text-white opacity-50 hidden hover:opacity-75 group-hover:block cursor-pointer z-10 duration-300' size={40}/>
            <HiChevronRight onClick={slideRight} className='absolute top-[43%] right-0 text-white opacity-50 hidden hover:opacity-75 group-hover:block cursor-pointer z-10 duration-300' size={40}/>
      </div>
    </>
  )
}

export default SavedShows