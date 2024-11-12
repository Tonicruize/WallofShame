import React from "react";

import IconTextCard from './IconTextCard';

const Features = () => {
  const products = [
    {
        icon: 'assets/img/icons/sell1.png',
        heading: 'Submit Nft',
        text: 'Submit NFTs of known scammers to be added to the Wall.',
    },
    {
        icon: 'assets/img/icons/sell2.png',
        heading: 'Claim NFT',
        text: 'Connect Wallet and Claim $WOS NFT of Scammers.',
    },
    {
        icon: 'assets/img/icons/sell3.png',
        heading: 'Stake NFT',
        text: 'Stake your NFTs to earn tokens from a specific percentage of the allocated supply.',
    },
    {
        icon: 'assets/img/icons/sell4.png',
        heading: 'Claim $WOS Tokens',
        text: 'Claim tokens by staking in batches as NFTs are added.',
    },
    {
        icon: 'assets/img/icons/sell5.png',
        heading: 'Limted Tokens',
        text: 'A limited number of NFTs are minted at a time to ensure fair token distribution.',
    },
];

    return (
        <section class="pt-120 pb-90">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-title style--two">
                <div class="d-flex flex-wrap align-items-center">
                  <h2 class="text-white">How $WOS Works</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">

          {products.map((product, index) => (
        
       
        
          <IconTextCard {...product} key={index}></IconTextCard>
        
        
      ))}
  

            
        
          </div>
        </div>
      </section>


    );
};
export default Features;