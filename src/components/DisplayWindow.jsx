import React from 'react'

const DisplayWindow = ({ expression, result }) => {
  return (
    <div className='w-full h-[12.5rem] bg-window p-[1.5rem] rounded-t-[0.8rem]'>
      <div className='flex flex-col justify-between w-full h-full'>
        <h2 className='text-text text-2xl font-[550]'>Calculator</h2>

        <div className='flex flex-col self-end'>
          <p className='text-text-grey text-end text-[1.5rem]'>{expression}</p>
          <p className='text-text text-end text-[2rem] font-[500]'>{result}</p>
        </div>
      </div>
    </div>
  )
}

export default DisplayWindow