import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='w-full h-[100px] bg-purpal-500 flex pl-[3.25rem] z-0 items-center'>
            <div className='absolute z-10 h-[100px] w-[100%] left-0 bg-gradient-to-t from-tanpal-500/40'></div>
            <p className='text-sm text-left drop-shadow-sm text-tanpal-500 z-8'>
                Streampal © 2023. All Rights Reserved. GNU AGPL v3.0.
            </p>
        </div>
    </>
  )
}

export default Footer