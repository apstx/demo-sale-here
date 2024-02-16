import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ChatRoomAction from '../../chatRoom/actions/ChatRoomAction';

export default function CreateRoomAction() {
    const [roomname, setRoomname] = useState("");
    const navigate = useNavigate();
    const {
        messageRoom,
        setMessageRoom
    } = ChatRoomAction()
    const createRoom = () => {
        localStorage.setItem('roomname', roomname);
        setMessageRoom([
            ...messageRoom,
            {
                roomname: roomname,
                chatRoom: [
                    {
                        id: messageRoom.length + 1,
                        name: localStorage.getItem('user'),
                        msg: 'สวัสดี'
                    }
                ]
            }
        ]);
        navigate('../chat-room');
    }

    const backPage = () => {
        navigate('/welcome');
    }

    return {
        roomname,
        setRoomname,
        createRoom,
        backPage
    }
}
