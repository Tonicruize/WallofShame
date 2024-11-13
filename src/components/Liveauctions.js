import React from "react";
import ProductSwiper from "./Swiper";

const Liveauctions = () => {
    return (
<section class="pt-120 pb-120 section-shape">
      <div class="container mt-60 mt-lg-0">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="section-title text-white text-center">
              <h2>Latest NFTs</h2>
              <p>
                NFTs are non-fungible tokens. They are unique items that you
                can't replace with something else. for trading card is an NFT –
                you can't just replace it with any other card.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
           <ProductSwiper />
          </div>
        </div>
      </div>
    </section>
    );
};
export default Liveauctions;