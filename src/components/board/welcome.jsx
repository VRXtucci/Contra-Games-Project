import React from 'react'
import Gif from '../../assets/contra.gif'
import './welcome.css'

function Welcome() {
    return <>
        <main>
            <img src={Gif} alt="Fondo" className='absolute h-screen w-screen' />
            <div className='relative text-white'>
                <h1 className='flex py-5 justify-center items-center font-black text-white text-2xl'>Welcome to Contra Game</h1>
                <div className='flex justify-center items-center content-center h-screen w-screen'>
                    <button className='font-black text-white text-xl'>Click Here for play</button>
                </div>
            </div>
        </main>
    </>
}

export default Welcome

