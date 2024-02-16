import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function WelcomeAction() {
    const navigate = useNavigate();

    const createRoom = () => {
        navigate('/create-room')
    }

    const joinRoom = () => {
        navigate('/join-room');
    }

    const logOut = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('roomname');
        navigate('/');
    }

    return {
        createRoom,
        joinRoom,
        logOut
    }
}
