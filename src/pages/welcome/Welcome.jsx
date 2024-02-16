import React from 'react'
import Logo from '../../images/logo.png';
import HomeAction from '../home/actions/HomeAction';
import ButtonMain from '../../components/ButtonMain';
import ButtonSecond from '../../components/ButtonSecond';
import WelcomeAction from './actions/WelcomeAction';

export default function Welcome() {
    const {
        createRoom,
        joinRoom,
        logOut
    } = WelcomeAction();

    return (
        <div className="h-[100vh] h-screen font-noto">
            <div className="bg-[url('./images/bg.jpg')] h-full bg-no-repeat bg-cover">
                <img src={Logo} width={150} className='mx-auto py-4' alt="logo"/>
                <div className="bg-[#ffffff] rounded-[20px] h-[90vh] mx-8">
                    <p className="text-[37px] text-[#383838] text-center font-bold py-6">คุณ {localStorage.getItem('user')}</p>
                    <div className='text-center pt-[5rem]'>
                        <div className='py-2'>
                            <ButtonMain text={"สร้างห้องใหม่"} onClick={() => createRoom()}/>
                        </div>
                        <br/>
                        <div className="py-2">
                            <ButtonSecond text={"เข้าร่วมแชท"} onClick={() => joinRoom()}/>
                        </div>
                        <div className="py-2">
                            <ButtonSecond text={"ออกจากระบบ"} onClick={() => logOut()}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
