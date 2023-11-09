import React, { useEffect, useState } from 'react';
import { HiChevronRight, HiChevronLeft, HiTrash } from 'react-icons/hi';
import { UserAuth } from '../context/AuthContext';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import placeholder from '../imgs/placeholder.jpg';
import { useNavigate } from 'react-router-dom';

const SavedShows = ({ item }) => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  const navigate = useNavigate();

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const deleteShow = async (passedID) => {
    try {
      const updatedMovies = movies.filter((item) => item.id !== passedID);
      const docRef = doc(db, 'users', `${user?.email}`);
      await updateDoc(docRef, {
        savedShows: updatedMovies,
      });
      setMovies(updatedMovies);
    } catch (error) {
      console.error('Error deleting show:', error);
    }
  };

  useEffect(() => {
    const fetchUserShows = async () => {
      try {
        const docRef = doc(db, 'users', `${user?.email}`);
        const userSnapshot = await getDoc(docRef);

        if (userSnapshot.exists()) {
          setMovies(userSnapshot.data()?.savedShows || []);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (user?.email) {
      fetchUserShows();
    }
  }, [user?.email]);

  if (!user?.email) {
    return <div>User email not available.</div>;
  }

  const handleClick = async (id) => {
    sessionStorage.setItem('movieID', JSON.stringify(id));
    await navigate(`/watch/`); // Pass the ID to the Watch component
  }

  return (
    <>
      <h2 className='flex relative z-10 items-center p-4 font-bold drop-shadow-md text-tanpal-500 justify-left md:text-xl'>My Shows</h2>
      <div className='flex relative items-center group'>
        <div id={'slider'} className='overflow-x-scroll relative mr-12 ml-12 w-full h-full whitespace-nowrap scroll-smooth scrollbar-hide'>
          {[...Array(10)].map((_, id) => (
            <div key={id} className='w-[7rem] sm:w-[9rem] md:w-[11rem] lg:w-[13rem] inline-block cursor-pointer relative p-2 z-8'>
              {id < movies.length ? (
                <img className='block w-full h-full' src={`https://image.tmdb.org/t/p/w500/${movies[id].img}`} alt={movies[id]?.title} />
              ) : (
                <img className='block w-full h-full' src={placeholder} alt="placeholder" />
              )}
              <div className='absolute top-0 left-0 w-full h-full opacity-0 duration-300 text-tanpal-500 hover:bg-blapal-500/80 hover:opacity-100'>
                {id < movies.length ? (
                  <p className='flex justify-center items-center h-full text-xs font-bold text-center duration-300 white-space-normal md:text-sm' onClick={() => handleClick(movies[id].id)}>{movies[id]?.title}</p>
                ) : (
                  <p className='flex justify-center items-center h-full text-xs font-bold text-center duration-300 white-space-normal md:text-sm'>Loading or No Shows...</p>
                )}
                {id < movies.length ? (
                  <p onClick={() => deleteShow(movies[id].id)} className='absolute top-4 left-4 text-[1.25rem] duration-300 text-tanpal-600 hover:text-red-600'><HiTrash /></p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <HiChevronLeft onClick={slideLeft} className='absolute top-[43%] left-0 text-tanpal-500 opacity-100 hidden hover:opacity-75 group-hover:block cursor-pointer z-10 duration-300' size={40} />
        <HiChevronRight onClick={slideRight} className='absolute top-[43%] right-0 text-tanpal-500 opacity-100 hidden hover:opacity-75 group-hover:block cursor-pointer z-10 duration-300' size={40} />
      </div>
    </>
  );
};

export default SavedShows;