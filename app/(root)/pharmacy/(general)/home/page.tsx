import Loader from '@/components/Loader'
import ShopCard from '@/components/pharmacy/ShopCard'
import ShopListings from '@/components/pharmacy/ShopListings'
import React, { Suspense } from 'react'

const PharmacyHomePage = async () => {

  return (
    <div className='px-10 grid grid-cols-5
      gap-10 pt-20'>
        <ShopCard
          name={'K-Pharma Limited'}
          distance_by_car={6}
          distance_by_walk={10}
          imageSrc={'/images/hosp-7.jpg'}
          location={'Ayeduase'}
          number_of_stars={3.8}
        />
                <ShopCard
          name={'K-Pharma Limited'}
          distance_by_car={6}
          distance_by_walk={10}
          imageSrc={'/images/hosp-7.jpg'}
          location={'Ayeduase'}
          number_of_stars={3.8}
        />
                <ShopCard
          name={'K-Pharma Limited'}
          distance_by_car={6}
          distance_by_walk={10}
          imageSrc={'/images/hosp-7.jpg'}
          location={'Ayeduase'}
          number_of_stars={3.8}
        />
                <ShopCard
          name={'K-Pharma Limited'}
          distance_by_car={6}
          distance_by_walk={10}
          imageSrc={'/images/hosp-7.jpg'}
          location={'Ayeduase'}
          number_of_stars={3.8}
        />
                <ShopCard
          name={'K-Pharma Limited'}
          distance_by_car={6}
          distance_by_walk={10}
          imageSrc={'/images/hosp-7.jpg'}
          location={'Ayeduase'}
          number_of_stars={3.8}
        />
                <ShopCard
          name={'K-Pharma Limited'}
          distance_by_car={6}
          distance_by_walk={10}
          imageSrc={'/images/hosp-7.jpg'}
          location={'Ayeduase'}
          number_of_stars={3.8}
        />
                <ShopCard
          name={'K-Pharma Limited'}
          distance_by_car={6}
          distance_by_walk={10}
          imageSrc={'/images/hosp-7.jpg'}
          location={'Ayeduase'}
          number_of_stars={3.8}
        />
                <ShopCard
          name={'K-Pharma Limited'}
          distance_by_car={6}
          distance_by_walk={10}
          imageSrc={'/images/hosp-7.jpg'}
          location={'Ayeduase'}
          number_of_stars={3.8}
        />
                <ShopCard
          name={'K-Pharma Limited'}
          distance_by_car={6}
          distance_by_walk={10}
          imageSrc={'/images/hosp-7.jpg'}
          location={'Ayeduase'}
          number_of_stars={3.8}
        />
                <ShopCard
          name={'K-Pharma Limited'}
          distance_by_car={6}
          distance_by_walk={10}
          imageSrc={'/images/hosp-7.jpg'}
          location={'Ayeduase'}
          number_of_stars={3.8}
        />
                <ShopCard
          name={'K-Pharma Limited'}
          distance_by_car={6}
          distance_by_walk={10}
          imageSrc={'/images/hosp-7.jpg'}
          location={'Ayeduase'}
          number_of_stars={3.8}
        />
                <ShopCard
          name={'K-Pharma Limited'}
          distance_by_car={6}
          distance_by_walk={10}
          imageSrc={'/images/hosp-7.jpg'}
          location={'Ayeduase'}
          number_of_stars={3.8}
        />
                <ShopCard
          name={'K-Pharma Limited'}
          distance_by_car={6}
          distance_by_walk={10}
          imageSrc={'/images/hosp-7.jpg'}
          location={'Ayeduase'}
          number_of_stars={3.8}
        />
                <ShopCard
          name={'K-Pharma Limited'}
          distance_by_car={6}
          distance_by_walk={10}
          imageSrc={'/images/hosp-7.jpg'}
          location={'Ayeduase'}
          number_of_stars={3.8}
        />
                <ShopCard
          name={'K-Pharma Limited'}
          distance_by_car={6}
          distance_by_walk={10}
          imageSrc={'/images/hosp-7.jpg'}
          location={'Ayeduase'}
          number_of_stars={3.8}
        />
                <ShopCard
          name={'K-Pharma Limited'}
          distance_by_car={6}
          distance_by_walk={10}
          imageSrc={'/images/hosp-7.jpg'}
          location={'Ayeduase'}
          number_of_stars={3.8}
        />
                <ShopCard
          name={'K-Pharma Limited'}
          distance_by_car={6}
          distance_by_walk={10}
          imageSrc={'/images/hosp-7.jpg'}
          location={'Ayeduase'}
          number_of_stars={3.8}
        />
      {/* <Suspense fallback={<Loader/>}>
        <ShopListings/>
      </Suspense> */}
    </div>
  )
}

export default PharmacyHomePage
