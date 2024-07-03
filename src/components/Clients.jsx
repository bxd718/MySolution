import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        <h2 className={`${styles.heading2} text-center text-gray-500`}>Our Partners</h2>
      

        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img
              src={client.logo}
              alt='client'
              className='sm:w-[192px] w-[100px] object-contain'
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
