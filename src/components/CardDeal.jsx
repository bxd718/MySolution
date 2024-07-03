import React from 'react'
import {inovation } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Discover the Best <br className='sm:block hidden'/>IT Solutions.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Explore the best IT solutions available. Gain access to a wide range of technologies and services. 
        Easily find the most suitable options for your business needs. Take advantage of the exclusive benefits
         offered by MySolutions.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={inovation}
          alt='Viage conosco'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
