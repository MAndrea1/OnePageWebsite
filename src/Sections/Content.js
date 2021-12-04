import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Content = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        const fetchimages = async() => {
            try {
            const fetchedimages = await axios.get('https://pixabay.com/api/?key=24658295-f61787c2c19435dee864df8c7&q=white&image_type=photo&colors=white&per_page=12')
            if (fetchedimages.status === 200) {
                setImages(fetchedimages.data.hits)
                console.log('200 ok')
                return true
            }
            } catch (err) {
                console.error(err)
                return false
            }
        }
        fetchimages()
    }, [])

console.log(images)

    return (
        <section className='section pb-32 bg-gradient-to-t from-yellow-900 to-yellow-800 text-center' id='content'>
        <h1 className='text-4xl mb-16 mt-5 sm:mt-10 text-gray-50'>Other content</h1>
        <div className='mx-32 grid grid-cols-3 gap-4 justify-items-center'>
            {images.map((image) => {
                return(
                    <div key={image.id} className={'h-40 w-60 overflow-hidden'}>
                    <img alt={image.tags} src={image.largeImageURL} className={'h-full w-full object-cover transition duration-300 filter saturate-0 hover:saturate-100'}></img>
                    </div>
                )
            })}
        </div>
      </section>
    )
}

export default Content
