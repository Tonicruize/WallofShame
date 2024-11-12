import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import ProductCard from './ProductCard';

const ProductSwiper = () => {
  const products = [
    {
      title: 'Liquid Forest Princess',
      price: '03.66',
      imgSrc: 'assets/img/product/product1.png',
      countdown: { hours: '00', minutes: '00', seconds: '00' },
      detailsUrl: 'item-details.html',
    },
    {
      title: 'The Girl With The Firefly',
      price: '0.88',
      imgSrc: 'assets/img/product/product2.png',
      countdown: { hours: '00', minutes: '00', seconds: '00' },
      detailsUrl: 'item-details.html',
    },
    {
      title: 'The Girl With The Firefly',
      price: '0.88',
      imgSrc: 'assets/img/product/product3.png',
      countdown: { hours: '12', minutes: '00', seconds: '00' },
      detailsUrl: 'item-details.html',
    },
    {
      title: 'The Girl With The Firefly',
      price: '0.88',
      imgSrc: 'assets/img/product/product4.png',
      countdown: { hours: '12', minutes: '00', seconds: '00' },
      detailsUrl: 'item-details.html',
    },
    // Add more products as needed
  ];

  return (
    <Swiper
    className="swiper live-auction"
    slidesPerView={3}
    spaceBetween={30}
    loop={true}
    pagination={{
      el: '.swiper-pagination', // Custom class for pagination
      clickable: true, // Enables pagination bullets to be clickable
    }}
    modules={[Pagination]} // Import and use the Pagination module
    breakpoints={{
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
    }}
>
      {products.map((product, index) => (
        
        <SwiperSlide 
        className="mb-60"
        key={index}>
          <ProductCard {...product} />
        </SwiperSlide>
        
      ))}
       <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default ProductSwiper;
