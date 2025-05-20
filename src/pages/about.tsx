// Packages:
import { useLocation } from "react-router-dom"

const About = () => {
  // Constants:
  const currentPage = useLocation()
  return (
    <div className='mt-[50px]'>
        <span className='text-normal font-medium text-[#949494]'>{currentPage?.pathname}</span>
        <h2 className='font-bold text-heading-2'>Meet Your Fitness Coach</h2>
        <div className='text-heading-4 font-medium'>
          <p className='mt-[24px]'>Hi, I'm John Doe — a certified fitness coach dedicated to helping you become stronger, healthier, and more confident, both inside and out. With 5+ years of experience in training clients from all walks of life, I specialize in creating personalized workout plans that actually fit your lifestyle and goals.</p>

          <p className='mt-[24px]'>Fitness isn't just my career—it's my calling. I believe that the right mindset, guidance, and consistency can transform more than just your body—it can change your entire life. Whether you're looking to lose fat, build muscle, improve athletic performance, or simply feel better in your own skin, I'm here to guide you every step of the way.</p>

          <p className='mt-[24px]'>Let's turn your fitness goals into lasting results—no fluff, no quick fixes—just real progress.</p>
        </div>
    </div>
  )
}

export default About