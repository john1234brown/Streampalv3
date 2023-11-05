import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import LogModal from './LogModal';

const Movie = ({item}) => {

    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const {user} = UserAuth();
    const movieID = doc(db, 'users', `${user?.email}`)
    const [modalOpen, setModalOpen] = useState(false)

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
    }

  return (
    <>
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 z-8'>
            <img className='w-full h-full block' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item?.title} />
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
            <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
            <p onClick={saveShow}>
              {like ? (
                <FaHeart className='absolute top-4 left-4 text-gray-300' />
              ) : (
                <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
              )}
            </p>
        </div>
        </div>
        <LogModal isOpen={modalOpen} toggleModal={toggleModal} />
    </>
  )
}

export default Movie