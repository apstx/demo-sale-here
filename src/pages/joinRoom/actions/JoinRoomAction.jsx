import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import ChatRoomAction from '../../chatRoom/actions/ChatRoomAction';

export default function JoinRoomAction() {
    const navigate = useNavigate();
    const [roomname, setRoomname] = useState("");
    const {
        messageRoom,
        setMessageRoom
    } = ChatRoomAction()

    const joinRoom = () => {
        if (JSON.parse(localStorage.getItem('chatRoom')).filter((da) => da.roomname === roomname).length !== 0) {
            localStorage.setItem('roomname', roomname);
            console.log(localStorage.getItem('chatRoom'))
            console.log('Join Room')
            localStorage.setItem('chatRoom', JSON.stringify(localStorage.getItem('chatRoom')));
            setMessageRoom(JSON.parse(localStorage.getItem('chatRoom')));
            console.log(messageRoom)
            navigate('../chat-room');
        } else {
            Swal.fire({
                text: "ไม่พบห้องแชท",
                icon: "warning"
            });
        }
    }

    const backPage = () => {
        navigate('/welcome');
    }

    return {
        backPage,
        joinRoom,
        roomname,
        setRoomname
    }
}
