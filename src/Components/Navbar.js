import { MenuSections } from '../Data'

const Navbar = ({HandleClick}) => {
    return (
        <div>
            <nav className='bg-yellow-900 h-12 px-5 flex justify-between items-center w-screen fixed'>
                <a href='#home' className='text-yellow-600 font-serif text-4xl'>LOGO</a>
                <button onClick={() => {HandleClick()}} className='text-yellow-500 sm:hidden inline-block pr-5'>Menu</button>
                <ul className='hidden sm:inline-flex'>
                    {MenuSections.map((section) => {
                        return(
                            <li className={'text-yellow-500 hover:text-white mx-3 cursor-pointer block'}>
                                <a href={section.link}>{section.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}



export default Navbar
