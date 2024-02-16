import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ChatRoomAction() {
    const [messageRoom, setMessageRoom] = useState([]);
    const [message, setMessage] = useState("");
    const [logMsg, setLogMsg] = useState();
    const isFirst = useRef(true);
    const navigate = useNavigate();

    const sentMsg = (e) => {
        if (e.key === "Enter" && message !== "") {
            e.preventDefault(); 
            setMessageRoom([
                ...messageRoom,
                {
                    roomname: localStorage.getItem('roomname'),
                    chatRoom: [
                        {
                            id: messageRoom.length + 1,
                            name: localStorage.getItem('user'),
                            msg: message
                        }
                    ]
                }
            ]);
            setMessage('');
        }
    }

    const update = () => {
        localStorage.setItem('chatRoom', JSON.stringify(messageRoom))
        setLogMsg(JSON.parse(localStorage.getItem('chatRoom')));
    }

    const backPage = () => {
        navigate('/create-room');
    }
    
    const handleClickScroll = () => {
        const element = document.getElementById('section-1');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' , block: "end", inline: "nearest"});
        }
    };
    
    return {
        message,
        setMessage,
        sentMsg,
        messageRoom,
        setMessageRoom,
        update,
        isFirst,
        logMsg,
        setLogMsg,
        backPage,
        handleClickScroll
    }
}
