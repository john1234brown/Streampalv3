import React, { useEffect } from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'
import Footer from '../components/Footer'
import SavedShows from '../components/SavedShows'
import ProtectedRoute from '../components/ProtectedRoute'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Home = () => {
  const {user} = UserAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate]);

  if (!user) {
    return null
  }

  return (
    <>
        <div className='z-0'>
          <Main />
        </div>
        <div className='z-12 mt-[-2rem] w-full'>
          <ProtectedRoute><SavedShows /></ProtectedRoute>
          <Row rowID='1' title='Popular' fetchURL={requests.requestPopular} />
          <Row rowID='2' title='Animation' fetchURL={requests.requestAnimation} />
          <Row rowID='3' title='Fantasy' fetchURL={requests.requestFantasy} />
          <Row rowID='4' title='Horror' fetchURL={requests.requestHorror} />
          <Row rowID='5' title='Comedy' fetchURL={requests.requestComedy} />
          <Row rowID='6' title='Crime' fetchURL={requests.requestCrime} />
          <Row rowID='7' title='War' fetchURL={requests.requestWar} />
          <div className='mt-[4rem]'>
            <Footer />
          </div>
        </div>
    </>
  )
}

export default Home