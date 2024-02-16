import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ButtonMain({text, onClick = null}) {
    const navigate = useNavigate();

    return (
        <button 
            type="button"
            className='text-[30px] rounded-[10px] px-8 text-[#ffffff] transition duration-300ease-in-out hover:scale-105 hover:shadow-lg shadow-[#6f6f6f] py-2 bg-gradient-to-tl from-[#c41417] to-[#b31315] hover:bg-[#c41417]'
            onClick={onClick}                        
        >
            {text}
        </button>
    ) 
}
