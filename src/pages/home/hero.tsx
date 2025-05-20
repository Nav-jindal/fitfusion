// Packages:
import { motion } from "motion/react"
import { NavLink } from "react-router-dom"

// Icons:
import { FaFireFlameCurved } from "react-icons/fa6"

const Hero = () => {
  return (
    <div className='h-[calc(100vh_-_140px)] flex items-center'>
        <div className='max-w-[600px] '>
            <h1 className='font-bold text-heading-1 '>
                A New Era of Fitness Standards
            </h1>
            <p className='lg:w-3/4 font-medium mt-5'> 
                Conventional diets don't work. Discover the FitFusion methodology to fat loss.
            </p>
            <div className='flex items-center gap-[18px] mt-[45px] w-max flex-wrap'>
                <a href='mailto:example@mail.com' className='no-underline py-[12px] px-[54px] text-button font-medium bg-accent text-background hover:bg-accent-dark-foreground flex items-center gap-3 text-'>
                    <FaFireFlameCurved size={24}  color='#ffffff' />
                    Loose Fat
                </a>
                <NavLink to='about' className='bg-background py-[12px] px-[30px] text-button font-medium border border-accent text-accent hover:bg-accent-foreground'>
                    Know your coach
                </NavLink>
            </div>
        </div>
        
        <div className='absolute z-[-10] pointer-events-none top-0 left-0 right-0 flex items-center uppercase text-accent opacity-13 text-[150px] md:text-[300px] font-semibold w-full h-screen'>
            <motion.span
                initial={{x: '0%'}}
                animate={{ x: "-100%" }}
                transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
                }}
                className='flex-shrink-0'
            >
                fitfusion
            </motion.span>

            <motion.span
                initial={{x: '0%'}}
                animate={{ x: "-100%" }}
                transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
                }}
                className='flex-shrink-0'
            >
                fitfusion
            </motion.span>
        </div>
        
        <div className='max-lg:w-[575px] max-lg:opacity-55 max-lg:z-[-1] absolute bottom-0 right-0 lg:right-20 lg:flex-1 lg:max-w-[52%]'>
            <img
                className='min-lg:max-h-[530px] w-full h-auto object-cover'
                src='/assets/heroImage.png'
                alt='FitFusion'
            />
        </div>
    </div>
  )
}

export default Hero