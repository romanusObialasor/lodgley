import React from 'react'
import DetailHeader from './DetailHeader'
import ApartmentImageCarousel from './ApartmentImagesCarousel'

const Detail = () => {
  return (
    <div>
        <DetailHeader />
        <ApartmentImageCarousel
  images={[
    "/data/bedroom1.jpg",
    "/data/bedroom5.jpg",
    "/data/bedroom8.jpg",
  ]}
/>

    </div>
  )
}

export default Detail