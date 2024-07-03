import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={'flex-1 font-poppins font-semibold ss:text-[52px] text-[2px] text-gray-700 ss:leading-[100.8px] leading-[75px]'}>Experience Our Services Now!</h2>
        <p className={`${styles.paragraph} max-w-[1000px] mt-5 text-center`}>
          Everything to streamline technology management and deliver efficient solutions for you and your team.
        </p>

      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button />
      </div>
    </section>
  )
}

export default CTA
