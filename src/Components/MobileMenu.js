import React from 'react'
import { MenuSections } from '../Data'

const MobileMenu = ({HandleClick}) => {
    return (
        <div onClick={() => {HandleClick()}} className='h-screen w-screen bg-black opacity-75 z-50 fixed flex flex-col items-center justify-center text-center'>
            <ul>
                {MenuSections.map((section) => {
                    return(
                        <li className='text-yellow-500 hover:text-white cursor-pointer text-2xl m-16'>
                            <a href={section.link}>{section.name}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MobileMenu
