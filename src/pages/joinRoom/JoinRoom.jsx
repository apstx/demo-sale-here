import React from 'react'
import Logo from '../../images/logo.png';
import ButtonMain from '../../components/ButtonMain';
import ButtonSecond from '../../components/ButtonSecond';
import JoinRoomAction from './actions/JoinRoomAction';
import InputText from '../../components/InputText';

export default function JoinRoom() {
    const {
        backPage,
        joinRoom,
        roomname,
        setRoomname
    } = JoinRoomAction();

    return (
        <div className="h-[100vh] h-screen font-noto">
            <div className="bg-[url('./images/bg.jpg')] h-full bg-no-repeat bg-cover">
                <img src={Logo} width={150} className='mx-auto py-4' alt="logo"/>
                <div className="bg-[#ffffff] rounded-[20px] h-[90vh] mx-8">
                    <p className="text-[37px] text-[#383838] text-center font-bold py-6">เข้าร่วมแชท</p>
                    <div className="text-center pb-7">
                        <InputText value={roomname} onChange={(e) => setRoomname(e.target.value)}/>
                    </div>
                    <div className='flex justify-center'>
                        <div className="py-2 px-2">
                            <ButtonSecond text={"กลับ"} onClick={() => backPage()}/>
                        </div>
                        <div className='py-2 px-2'>
                            <ButtonMain text={"ยืนยัน"} onClick={() => joinRoom()}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
