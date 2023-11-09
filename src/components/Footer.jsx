import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='w-full h-[5rem] bottom-0 bg-purpal-500 flex justify-center z-0 items-center'>
            <div className='absolute z-10 h-[4.50rem] w-full left-0 bg-gradient-to-t from-tanpal-500/40'></div>
            <p className='z-20 text-xs font-semibold text-left drop-shadow-sm text-blapal-500'>
                Streampal © 2023. All Rights Reserved. <a href='https://www.gnu.org/licenses/agpl-3.0'>GNU AGPL v3.0</a>.
            </p>
        </div>
    </>
  )
}

export default Footer