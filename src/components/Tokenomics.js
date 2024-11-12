import React from "react";

const Tokenomics = () => {
    return(
<section class="pt-120 pb-120" id="tokenomics">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-6 order-1 order-lg-0">
            <div class="item-details ov-hidden">
              <h2 class="product-title">Tokenomics</h2>
          
              <p>
              Understanding the $WOS token distribution is essential to grasp how the Wall of Shame operates and rewards its community. Designed with transparency and fairness at its core, $WOS incentivizes the exposure of scammers while ensuring sustainable value for all participants.
                <a href="#" class="read-more c1">read more...</a>
              </p>
              <h2 class="product-title">Staking Mechanics</h2>
          
              <p>
              Stake your NFTs and unlock exclusive token rewards. Here’s how it works:   </p>
              <div class="row pt-1">
                <div class="col-sm-6">
                <h5>1. Connect Your Wallet</h5>
        <p>Link your wallet to access the staking platform and manage your NFTs.</p>
 
                </div>
                <div class="col-sm-6">
                <h5>2. Stake Your NFTs</h5>
        <p>Choose the NFTs you wish to stake and start earning rewards instantly.</p>
  
                </div>
              </div>
              <div class="row pt-5">
                <div class="col-sm-6">
                <h5>3. Earn & Claim Rewards</h5>
        <p>Collect $WOS tokens as your NFTs remain staked and gain priority access to new NFT releases.</p>
    
                </div>
                <div class="col-sm-6">
              
        <p> Staking your NFTs not only earns you tokens but also grants exclusive benefits and early access to future NFT batches.
        </p>
  
                </div>
              </div>
             
              <div class="button-group style--two">
                <a href="item-details.html" class="btn btn-border btn-sm"
                  ><img
                    src="assets/img/icons/btn-buy-now-icon.svg"
                    alt=""
                    class="svg"
                  />
                  Buy Now</a
                >
                <a href="item-details.html" class="btn btn-sm"
                  ><img
                    src="assets/img/icons/judge-icon.svg"
                    alt=""
                    class="svg"
                  />
                  Place Bid</a
                >
              </div>
        
              <ul class="nav tab-buttons style--two">
                <li>
                  <button
                    class="active"
                    data-bs-toggle="tab"
                    data-bs-target="#info"
                  >
                    Info
                  </button>
                </li>
                <li>
                  <button data-bs-toggle="tab" data-bs-target="#bids">
                    Bids
                  </button>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane fade show active" id="info">
                  <ul class="info-list">
                    <li>
                      <h6>NFTs ID</h6>
                      <h3>690563</h3>
                    </li>
                    <li>
                      <h6>Mint Transactions</h6>
                      <h3>69b9ebde0178k7O7&export</h3>
                    </li>
                    <li>
                      <h6>Contact Address</h6>
                      <h3>kɒngtækt əˈdrɛs</h3>
                    </li>
                  </ul>
                </div>
                <div class="tab-pane fade" id="bids">
                  <p>No active bids yet. Be the first to make a bid!</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-5 col-lg-6 order-0 order-lg-1">
            <div class="item-details-img mb-5 mb-lg-0">
              <img src="assets/img/media/item-details.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};
export default Tokenomics;