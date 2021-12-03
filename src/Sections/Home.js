import React from 'react'
import video from '../Media/video.mp4'

const Home = () => {
    return (
        <section className='section relative flex items-center justify-center h-screen mb-12 overflow-hidden' id='home'>
            <div className='relative z-30 p-5 text-2xl text-white bg-gray-50 bg-opacity-50 rounded-sm'>
                <h1 className='relative'>Title Here</h1>
            </div>
            <video className='absolute z-10 object-cover w-auto min-w-full min-h-full h-screen overflow-hidden' autoPlay loop muted src={video}>
                Your browser does not support the video tag.
            </video>
        </section>
    )
}

export default Home
