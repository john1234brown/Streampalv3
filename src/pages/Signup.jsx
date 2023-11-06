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
                <div className='w-full h-screen'>
            <img className='hidden object-cover absolute w-full h-full sm:block' src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/384d70af-0a67-470f-a87d-8cd53438e26f/US-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='signup-Bg'></img>
            <div className='fixed top-0 left-0 w-full h-screen bg-black/60'></div>
            <div className='fixed z-50 px-4 py-24 w-full'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign Up</h1>
                        <form onSubmit={handleSubmit} className='flex flex-col items-center py-4 w-full'>
                            <input
                            onChange={(e) => setEmail(e.target.value)}
                            className='p-3 my-2 rounded border border-gray-800 bg-gray-900/75 hover:bg-gray-900/50' 
                            type="email" 
                            placeholder='Email' 
                            autoComplete='email' 
                            />
                            <input
                            onChange={(e) => setPassword(e.target.value)}
                            className='p-3 my-2 rounded border border-gray-800 bg-gray-900/75 hover:bg-gray-900/50' 
                            type="password" 
                            placeholder='Password' 
                            autoComplete='current-password' 
                            />
                            <button className='w-[50%] bg-purpal-500 py-1 my-6 rounded font-bold hover:bg-purpal-600'>Sign Up</button>
                            <div className='flex justify-between items-center text-sm text-gray-600'>
                                <p><input className='mr-2' type="checkbox" />Remeber me</p>
                                <p className='ml-20'>Need Help?</p>
                            </div>
                            <span className='py-6 text-gray-600'>
                                Already have a StreamPal account?
                            </span>
                            <Link to='/login'>
                                <button className='py-1 my-1 px-[3rem] w-full rounded font-bold border-white border hover:border-opacity-0 hover:bg-white/75 hover:text-black'>Log In</button>
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