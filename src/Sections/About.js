import React from 'react'
import image from '../Media/image.jpg'

const About = () => {
    return (
        <section className='section bg-gray-50 flex items-center justify-center text-gray-700 ' id='about'>
            <div className='mb-10 w-5/6 grid sm:grid-cols-2 gap-16 bg-white p-10 shadow-md text-justify'>
                <div className=''>
                    <h2 className='text-3xl mb-7 text-yellow-800'>What this website is about</h2>
                    <p>This is a long text about the about page. It includes a really neutral image in the side as example of an image in the side</p>
                    <p>This is a another paragraph about the about page.</p>
                    <p>This is a long text about the about page. It includes a really neutral image in the side as example of an image in the side</p>
                </div>
                <div>
                    <img className='h-full object-cover' 
                    alt='Neutral white background by Ylanite' src={image}></img>
                </div>
            </div>
        </section>
    )
}

export default About
