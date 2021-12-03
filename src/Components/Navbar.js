import { MenuSections } from '../Data'

const Navbar = ({HandleClick}) => {
    return (
        <nav className='bg-yellow-900 h-12 px-5 flex justify-between items-center w-screen fixed z-40'>
            <a href='#home' className='text-yellow-600 font-serif text-4xl'>LOGO</a>
            <button onClick={() => {HandleClick()}} className='text-yellow-500 sm:hidden inline-block mr-3'>Menu</button>
            <ul className='hidden sm:inline-flex'>
                {MenuSections.map((section) => {
                    return(
                        <li className={'text-yellow-500 hover:text-white cursor-pointer block m-5'}>
                            <a href={section.link}>{section.name}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}



export default Navbar
