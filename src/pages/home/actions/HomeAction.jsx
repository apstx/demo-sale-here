import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function HomeAction() {
    const [username, setUsername] = useState("");
    const navigate = useNavigate()

    const createName = () => {
        localStorage.setItem("user", username)
        navigate('/welcome')
    }
    
    return {
        username,
        setUsername,
        createName
    }
}
