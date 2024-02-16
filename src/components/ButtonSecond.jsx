import React from 'react'

export default function ButtonSecond({text, onClick = null}) {
    return (
        <button
            type="button"
            className='text-[30px] rounded-[10px] px-8 text-[#505050] transition duration-300ease-in-out hover:scale-105 hover:shadow-lg shadow-[#6f6f6f] py-2 '
            onClick={onClick}
        >
            {text}
        </button>
    )
}
