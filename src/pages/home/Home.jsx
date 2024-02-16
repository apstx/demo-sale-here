import React from 'react'
import Logo from '../../images/logo.png';
import HomeAction from './actions/HomeAction';
import ButtonMain from '../../components/ButtonMain';
import InputText from '../../components/InputText';

export default function Home() {
    const {
        username,
        setUsername,
        createName
    } = HomeAction();

    return (
        <div className="h-[100vh] h-screen font-noto">
            <div className="bg-[url('./images/bg.jpg')] h-full bg-no-repeat bg-cover">
                <img src={Logo} width={150} className='mx-auto py-4' alt="logo"/>
                <div className="bg-[#ffffff] rounded-[20px] h-[90vh] mx-8">
                    <p className="text-[37px] text-[#383838] text-center font-bold py-6">ชื่อของคุณ</p>
                    <div className="flex justify-center pb-7">
                        <InputText value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    { username === "" ? null : (
                        <div className="text-center">
                            <ButtonMain text={"ยืนยัน"} onClick={() => createName()}/>
                        </div> 
                    )}
                </div>
            </div>
        </div>
    )
}
