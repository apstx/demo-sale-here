import React from 'react'

export default function InputText({value, onChange}) {
    return (
        <div>
            <input 
                type='text'
                className='w-[300px] h-[60px] border-lightgray border-[3px] rounded-[10px] text-[34px] text-center border-solid focus:outline-none'
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
