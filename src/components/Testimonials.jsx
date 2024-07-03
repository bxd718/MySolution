import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import Feedback from './Feedback'

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'/>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}> Who we <br className='sm:block hidden'/> Are </h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[650px]`}>
          We are MySolutions, or rather Your Solution. An innovative IT company transforming the way businesses operate. 
          Our mission is to connect businesses with cutting-edge technology, providing efficient and accessible IT solutions. With our advanced technology, we offer a wide range of services tailored to your specific needs, making it easy and secure to manage your IT infrastructure through our intuitive platform. Our commitment is to ensure that every business can operate smoothly and effectively, taking advantage of the best solutions and the convenience of managing everything directly from their devices. </p>  
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-contrainer relative z-[1]'>
        {feedback.map((card) => (
          <Feedback key={card.id} {...card}/>        
        ))}
      </div>      
    </section>
  )
}

export default Testimonials
