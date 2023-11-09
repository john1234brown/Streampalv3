import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import LogModal from './LogModal';
import { useNavigate } from 'react-router-dom';

const Movie = ({item}) => {

    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const {user} = UserAuth();
    const movieID = doc(db, 'users', `${user?.email}`)
    const [modalOpen, setModalOpen] = useState(false)
    const navigate = useNavigate();

    const toggleModal = () => {
      setModalOpen(!modalOpen)
    }

    const saveShow = async () => {
      if (user?.email) {
        setLike(!like)
        setSaved(true)
        await updateDoc(movieID, {
          savedShows: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.poster_path
          })
        })
      } else {
          toggleModal(setModalOpen(!modalOpen))
      }
      window.location.reload();
    }

      const handleClick = async() => {
        const movieIdents = item.id;
        sessionStorage.setItem('movieID', JSON.stringify(movieIdents));
        await navigate('/watch/');
      }

  return (
    <>
        <div className='w-[7rem] sm:w-[9rem] md:w-[11rem] lg:w-[13rem] inline-block cursor-pointer relative p-2 z-8'>
            <img className='block w-full h-full' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item?.title} />
        <div id='movieItem' className='absolute top-0 left-0 w-full h-full opacity-0 text-tanpal-500 hover:bg-blapal-500/80 hover:opacity-100'>
            <p className='flex justify-center items-center h-full text-xs font-bold text-center whitespace-normal md:text-sm' onClick={handleClick}>{item?.title}</p>
            <p onClick={saveShow}>
              {like ? (
                <FaHeart className='absolute top-4 left-4 text-purpal-500 hover:text-red-500' />
              ) : (
                <FaRegHeart className='absolute top-4 left-4 text-tanpal-500 hover:text-purpal-500' />
              )}
            </p>
        </div>
        </div>
        <LogModal isOpen={modalOpen} toggleModal={toggleModal} />
    </>
  )
}


export default Movie