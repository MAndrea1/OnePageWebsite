import React from 'react'
import video from '../Media/video.mp4'

const Home = () => {
    return (
        <section className='section relative flex items-center justify-center text-center' id='home'>
            <div className='relative z-30 p-8 sm:h-auto text-gray-600 bg-gray-50 bg-opacity-50 rounded-sm -mt-12'>
                <h1 className='relative text-3xl'>A title for this website</h1>
                <p>A subtitle for this website</p>
                <a href='#about'><button className='btn bg-white rounded-xl p-3 w-40 mt-1 animate-bounce hover:bg-yellow-800 hover:text-yellow-300 transition duration-200 ease-in-out'></button></a>
            </div>
            <video alt='White background - Video by Luna Lovegood from Pexels' className='absolute z-10 object-cover w-auto min-w-full min-h-full h-screen overflow-hidden' autoPlay loop muted src={video}>
                Your browser does not support the video tag.
            </video>
        </section>
    )
}

export default Home
