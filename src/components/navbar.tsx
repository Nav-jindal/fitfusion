// Packages:
import { NavLink, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { motion, type Variants } from "motion/react"

// Icons:
import { FaBars } from "react-icons/fa6"

// Typescript:
import type { RouterPathsType } from "../App"

interface NavigationLinkType {
    id?: number
    title: string
    currentPage: string
    toggleIsNavbarOpen?: () => void
}

const NavigationLink = ({
    title,
    currentPage,
    toggleIsNavbarOpen,
} : NavigationLinkType) => {
    return <NavLink
            className={`${currentPage === title ? 'text-accent pointer-events-none' : '' } text-normal hover:text-accent capitalize font-medium hover:border-b-2 hover:border-accent`}
            to={title}
            onClick={toggleIsNavbarOpen}
        >
        {title === '/' ? 'home' : title.slice(1)}
    </NavLink>
}

const Navbar = ({
    routerPaths
} : RouterPathsType) => {
    // Constants:
    const currentPage = useLocation()
    const burgerMenuVariant: Variants = {
        hidden: {
            scale: 0,
            opacity:0
        },
        visible: {
            scale: 1,
            opacity:1
        }
    }

    // States:
    const [ isOpen, setIsOpen ] = useState<boolean>(false)

    // Functions:
    const toggleIsNavbarOpen = () => setIsOpen(false)
    
    // Effect:
    useEffect(()=>{
        console.log('isOpen: ', isOpen)
    },[isOpen])

    return (
        <div className='py-[24px]  flex items-center gap-[16px] justify-between'>
            <div className='font-bold text-heading-3'>
                <span className='text-accent'>Fit</span>Fusion
            </div>
            <div className='relative sm:hidden'>
                <div className='cursor-pointer '
                    onClick={()=>setIsOpen(!isOpen)}>
                    <FaBars size={24} color='#6f00fe' />
                </div>
                
                    <motion.div 
                        initial='hidden'
                        animate={isOpen ? 'visible' : 'hidden'}
                        variants={burgerMenuVariant}
                        transition={{duration: .5, ease: 'easeInOut'}}
                        
                        className='origin-top-right absolute right-0 top-[32px] bg-secondary-foreground text-background w-max h-fit'>
                    
                        <div className='p-[24px] flex gap-6 flex-col items-center'>
                            {routerPaths?.map((page, index)=>
                                <NavigationLink
                                    key={index}
                                    title={page.path ?? '/'}
                                    currentPage={currentPage.pathname}
                                    toggleIsNavbarOpen={toggleIsNavbarOpen}
                                />
                            )}
                            <a href='mailto:example@mail.com' className='py-[8px] px-[24px] font-medium border border-accent text-accent hover:bg-accent-foreground'>
                                Contact me
                            </a>
                        </div>
                    </motion.div>
                
            </div>
            { window.innerWidth > 640 && <>
                <div className='flex items-center gap-[32px]'>
                {routerPaths?.map((page, index)=>
                    <NavigationLink 
                        key={index}
                        title={page.path ?? '/'}
                        currentPage={currentPage.pathname}
                        //toggleIsNavbarOpen={toggleIsNavbarOpen}
                    />
                )}
                </div>
                <div>
                    <a href='mailto:example@mail.com' className='py-[8px] px-[24px] font-medium border border-accent text-accent hover:bg-accent-foreground'>
                        Contact me
                    </a>
                </div>
            </>}
        </div>
    )
}

export default Navbar