import React from 'react'

const KeysWrapper = ({ handleButton }) => {

    const scientificKeys = [
        'sin', 'cos', 'tan', 'ln', 'log', 'π', 'e', '^', '!', '√'
    ]

    const basicKeys = [
        '7', '8', '9', 'DEL', 'AC', '4', '5', '6', '-', '(', '1', '2', '3', '+', ')', '.', '0', '*', '/', '='
    ]

    return (
        <div className='w-full h-[25.5rem] flex flex-col justify-center items-center bg-keys rounded-b-[0.8rem] p-[1rem] rounded-t-[1rem]'>

            <div className='w-full grid grid-cols-5 items-center justify-center flex-wrap gap-[1rem] mb-[1rem]'>

                {scientificKeys.map((item, index) => (
                    <button
                        key={index}
                        className='text-text-grey text-center py-[0.5rem] text-[1.3rem] cursor-pointer rounded-[0.5rem] hover:bg-keys-hover'
                        onClick={() => handleButton(item)}
                    >{item}</button>
                ))}

            </div>

            <div className='w-full grid grid-cols-5 items-center justify-center flex-wrap gap-[1rem]'>

                {basicKeys.map((item, index) => (
                    <button
                        key={index}
                        className={`${item === '=' ? 'text-bg' : 'text-text'} text-center py-[0.5rem] text-[1.3rem] cursor-pointer rounded-[0.5rem] ${item === '=' ? 'bg-action' : 'hover:bg-keys-hover'}`}
                        onClick={() => handleButton(item)}
                    >{item}</button>
                ))}

            </div>

        </div>
    )
}

export default KeysWrapper