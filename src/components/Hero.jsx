import styles from '../style'
import { spaceInovation , logo } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-blue-200 ss:leading-[100.8px] leading-[75px]'>
          The Next Generation Of IT Solutions.<br className='sm:block hidden'/> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
          <img src={logo} alt='MySolution' className='w-[124px] h-[32px]'/>
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[670px] mt-5 `}>
        At MySolutions, we revolutionize the way businesses operate with cutting-edge IT solutions. Since our inception, we have been 
        dedicated to developing innovative applications and systems that drive efficiency and growth for our customers. Our experience spans a wide 
        range of technologies, allowing us to provide comprehensive solutions tailored to your specific needs. From automating everyday tasks to developing 
        sophisticated websites, we offer innovative solutions that enhance your business operations. Our commitment to excellence and customer satisfaction sets us apart as a trusted partner on your journey towards digital transformation.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={spaceInovation}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero
