import React from 'react'
import Logo from '../../images/logo.png';
import ButtonMain from '../../components/ButtonMain';
import ButtonSecond from '../../components/ButtonSecond';
import CreateRoomAction from './actions/CreateRoomAction';
import InputText from '../../components/InputText';

export default function CreateRoom() {
    const {
        roomname,
        setRoomname,
        createRoom,
        backPage
    } = CreateRoomAction()
    return (
        <div className="h-[100vh] h-screen font-noto">
            <div className="bg-[url('./images/bg.jpg')] h-full bg-no-repeat bg-cover">
                <img src={Logo} width={150} className='mx-auto py-4' alt="logo"/>
                <div className="bg-[#ffffff] rounded-[20px] h-[90vh] mx-8">
                    <p className="text-[37px] text-[#383838] text-center font-bold py-6">สร้างห้องใหม่</p>
                    <div className="text-center pb-7">
                        <InputText value={roomname} onChange={(e) => setRoomname(e.target.value)}/>
                    </div>
                    <div className='flex justify-center'>
                        <div className="py-2 px-2">
                            <ButtonSecond text={"กลับ"} onClick={() => backPage()}/>
                        </div>
                        <div className='py-2 px-2'>
                            <ButtonMain text={"ยืนยัน"} onClick={() => createRoom()}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
