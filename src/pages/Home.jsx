import React, { useEffect, useState } from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import { popular, key, genreIDs, animation, comedy, crime, fantasy, horror, war } from '../Requests'
import Footer from '../components/Footer'
import SavedShows from '../components/SavedShows'
import ProtectedRoute from '../components/ProtectedRoute'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Home = () => {
  const {user} = UserAuth()
  const navigate = useNavigate()
  const [updateKey, setUpdateKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdateKey(updateKey + 1);
    }, 30000);
  }, [updateKey]);

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate]);

  if (!user) {
    return null
  }

  const popularPages = popular;
  const animationPages = animation;
  const fantasyPages = fantasy;
  const horrorPages = horror;
  const comedyPages = comedy;
  const crimePages = crime;
  const warPages = war;

  const popularURLs = popularPages.reduce((accumulator, currentURL) => {
    return accumulator.concat(currentURL);
  }, []);

  const animationURLs = animationPages.reduce((accumulator, currentURL) => {
    return accumulator.concat(currentURL);
  }, []);

  const fantasyURLs = fantasyPages.reduce((accumulator, currentURL) => {
    return accumulator.concat(currentURL);
  }, []);

  const horrorURLs = horrorPages.reduce((accumulator, currentURL) => {
    return accumulator.concat(currentURL);
  }, []);

  const comedyURLs = comedyPages.reduce((accumulator, currentURL) => {
    return accumulator.concat(currentURL);
  }, []);

  const crimeURLs = crimePages.reduce((accumulator, currentURL) => {
    return accumulator.concat(currentURL);
  }, []);

  const warURLs = warPages.reduce((accumulator, currentURL) => {
    return accumulator.concat(currentURL);
  }, []);

  return (
    <>
        <div className='z-0 mt-[4rem]'>
          <Main />
        </div>
        <div className='z-5 mt-[-2rem] w-full'>
          <ProtectedRoute><SavedShows updateKey={updateKey}/></ProtectedRoute>
          <Row rowID={1} title="Popular" fetchURLs={popularURLs} />
          <Row rowID={2} title='Animation' fetchURLs={animationURLs} />
          <Row rowID={3} title='Fantasy' fetchURLs={fantasyURLs} />
          <Row rowID={4} title='Horror' fetchURLs={horrorURLs} />
          <Row rowID={5} title='Comedy' fetchURLs={comedyURLs} />
          <Row rowID={6} title='Crime' fetchURLs={crimeURLs} />
          <Row rowID={7} title='War' fetchURLs={warURLs} />
          <div className='mt-[4rem]'>
            <Footer />
          </div>
        </div>
    </>
  )
}

export default Home