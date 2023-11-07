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
            <div className='fixed top-0 left-0 w-full h-screen bg-blapal-500/75'></div>
            <div className='fixed px-4 py-24 mt-[7rem] w-full z-5'>
                <div className='rounded max-w-[450px] h-[600px] mx-auto bg-blapal-800/80 text-tanpal-500'>
                    <div className='max-w-[320px] mx-auto py-16'>
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
                                <p><input className='mr-2 w-4 h-4 rounded text-purpal-500 bg-blapal-500 hover:bg-gradient-to-b from-tanpal-500 border-tanpal-600 focus:ring-purpal-500' type="checkbox" />Remember me</p>
                                <p className='ml-8'>Need Help?</p>
                            </div>
                            <span className='py-6 text-tanpal-600'>
                                Already a member of StreamPal?
                            </span>
                            <Link to='/login'>
                                <button className='py-1 my-1 px-[3rem] w-full rounded font-bold border-tanpal-500 border hover:border-opacity-0 hover:bg-tanpal-500/75 hover:text-blapal-500'>Log In</button>
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