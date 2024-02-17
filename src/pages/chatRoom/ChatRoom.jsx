import React, { useEffect } from 'react'
import Logo from '../../images/logo.png';
import ChatRoomAction from './actions/ChatRoomAction';
import ButtonSecond from '../../components/ButtonSecond';

export default function ChatRoom() {
    const {
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
    } = ChatRoomAction();

    useEffect(() => {
        update();
        if (isFirst.current) {
            setLogMsg(JSON.parse(localStorage.getItem('chatRoom')));
            setMessageRoom([
                ...messageRoom,
                {
                    roomname: localStorage.getItem('roomname'),
                    chatRoom: [
                        {
                            id: messageRoom.length + 1,
                            name: localStorage.getItem('user'),
                            msg: 'สวัสดี'
                        }
                    ]
                }
            ]);
            isFirst.current = false;
        } 
        handleClickScroll();
    }, [messageRoom]);

    return (
        <div className="h-[100vh] h-screen font-noto">
            <div className="bg-[url('./images/bg.jpg')] h-full bg-no-repeat bg-cover">
                <img src={Logo} width={150} className='mx-auto py-4' alt="logo"/>
                <div className="bg-[#ffffff] rounded-[20px] h-[90vh] mx-8">
                    <div className="px-5">
                        <div className="flex justify-between">
                            <p className="text-[37px] text-[#383838] font-bold">ห้อง {localStorage.getItem('roomname')}</p>
                            <ButtonSecond text={"กลับ"} onClick={() => backPage()}/>
                        </div>
                        <div className="bg-[#F6F6F6] h-[80vh] rounded-[10px] relative">
                            <div className='overflow-auto max-h-[65vh]' id="language-scroll">
                                <div className="px-2">
                                    <p className="text-[12px]">คุณ eiei</p>
                                    <p className='bg-[#E9E9E9] max-w-max px-4 py-2 rounded-[10px] ms-5'>สวัสดี</p>
                                </div>
                                {logMsg?.map((data, i) => (
                                    data?.chatRoom?.map((value, i) => (
                                        value.name === localStorage.getItem('user') ? (
                                            <div key={i} className="px-2 text-right">
                                                <p className="text-[12px]">คุณ {value?.name}</p>
                                                <div className="flex justify-end">
                                                    <p className='bg-[#E9E9E9] max-w-max px-4 py-2 rounded-[10px] me-5'>{value.msg}</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div key={i} className="px-2">
                                                <p className="text-[12px]">คุณ {value?.name}</p>
                                                <p className='bg-[#E9E9E9] max-w-max px-4 py-2 rounded-[10px] ms-5'>{value.msg}</p>
                                            </div>
                                        )
                                    )) 
                                ))}
                                <div id="section-1"></div>
                            </div>
                            <label className="absolute inset-x-0 z-50 bottom-0 text-right text-[12px] pr-2 text-[#9b9999]">Enter เพื่อส่ง</label>
                            <textarea 
                                type='text'
                                placeholder='ส่งข้อความ'
                                style={{resize: 'none'}}
                                className='p-1 absolute inset-x-0 bottom-0 pr-[15px] h-[70px] border-lightgray border-[3px] rounded-[10px] border-solid focus:outline-none'
                                value={message}
                                onChange={(e) => setMessage(e.target.value.trimStart())}
                                onKeyDown={sentMsg}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
