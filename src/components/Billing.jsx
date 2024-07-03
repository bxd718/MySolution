import React from 'react'
import {serverImage } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={serverImage}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> Manage Your IT <br className='sm:block hidden'/> Solutions with Ease.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Easily control your projects and systems. With MySolutions, 
        you have complete control over your IT infrastructure. Stay informed 
        about your operations and plans with our intuitive platform.
        </p>
      </div>  
    </section>
  )
}

export default Billing
