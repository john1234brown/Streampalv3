import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

const Signup = () => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const {user, signUp} = UserAuth()
        const navigate = useNavigate()

        const handleSubmit = async (e) => {
            e.preventDefault()
            try {
                await signUp(email, password)
                navigate('/')
            } catch (error) {
                console.log(error)
            }
        }

  return (
    <>
        <div className='items-center w-[100vw] h-[100vh]'>
            <img className='object-cover fixed top-0 right-0 bottom-0 left-0 items-center h-[100vh] w-[100wv]' src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/384d70af-0a67-470f-a87d-8cd53438e26f/US-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='signup-Bg'></img>
            <div className='fixed top-0 right-0 bottom-0 left-0 w-[100vw] h-[100vh] bg-blapal-500/75'></div>
            <div className='absolute top-[20%] px-[1.75rem] sm:px-[5rem] md:px-[16rem] w-full h-full'>
                <div className='mx-auto rounded bg-blapal-800/80 text-tanpal-500'>
                    <div className='px-8 py-8 mx-auto md:py-[3.5rem]'>
                        <h1 className='text-3xl font-bold'>Sign Up</h1>
                        <form onSubmit={handleSubmit} className='flex flex-col items-center py-4 w-full'>
                            <input
                            onChange={(e) => setEmail(e.target.value)}
                            className='p-3 my-2 rounded border border-blapal-500 bg-blapal-800/75 hover:bg-blapal-500/50' 
                            type="email" 
                            placeholder='Email' 
                            autoComplete='email' 
                            />
                            <input
                            onChange={(e) => setPassword(e.target.value)}
                            className='p-3 my-2 rounded border border-blapal-500 bg-blapal-800/75 hover:bg-blapal-500/50' 
                            type="password" 
                            placeholder='Password' 
                            autoComplete='current-password' 
                            />
                            <button className='w-[50%] bg-purpal-500 py-1 my-6 rounded font-bold hover:bg-purpal-600'>Sign Up</button>
                            <div className='flex justify-between items-center text-sm text-tanpal-600'>
                                <p><input className='mr-2 w-4 h-4 rounded text-purpal-500 bg-blapal-500 hover:bg-gradient-to-b from-tanpal-500/75 border-tanpal-600 focus:ring-purpal-500' type="checkbox" />Remember me</p>
                                <p className='ml-8'>Need Help?</p>
                            </div>
                            <span className='py-6 text-tanpal-600'>
                                Already a member of StreamPal?
                            </span>
                            <Link to='/login'>
                                <button className='py-1 my-1 px-[3rem] w-full rounded font-bold border-tanpal-500 border hover:border-opacity-0 hover:bg-tanpal-500/75 hover:text-blapal-500'>Login In</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup