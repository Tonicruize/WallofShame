import React from "react";
import '../custom.css';

export default function Intro(){
    return(
    
        <div class="banner ov-hidden not-banner" id="thewall">
          <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="banner-content text-white mt-xl-5 pt-xl-2 mb-5 mb-lg-0">
                <h1>
                 The Wall <span>of</span> Shame
                </h1>
                <ul class="list-info text-white">
                  <li>
                    <h4>
                      <span class="counter">3</span>k<span class="c1">+</span>
                    </h4>
                    <h6>Artwork</h6>
                  </li>
                  <li>
                    <h4>
                      <span class="counter">9</span>k<span class="c1">+</span>
                    </h4>
                    <h6>Auction</h6>
                  </li>
                  <li>
                    <h4>
                      <span class="counter">6</span>k<span class="c1">+</span>
                    </h4>
                    <h6>Artist</h6>
                  </li>
                </ul>
                <div class="button-group">
                  <a href="create.html" class="btn"
                    ><img
                      src="assets/img/icons/discover.svg"
                      alt=""
                      class="svg"
                    />
                    Discover </a
                  ><a href="create.html" class="btn btn-link"
                    ><img
                      src="assets/img/icons/create-icon.svg"
                      alt=""
                      class="svg"
                    />
                    Create NFT</a
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="banner-img mb-60 mb-lg-0">
                <img src="assets/img/media/banner-img.png" alt="" />
                <div class="banner-img-content">
                  <h2>Do a Portrait Painting Artwork!</h2>
                  <ul class="list-info text-white style--two">
                    <li>
                      <h5>Current Bid</h5>
                      <h4 class="mb-0">
                        <img src="assets/img/icons/eth.svg" alt="" class="svg" />
                        03.66 ETH
                      </h4>
                    </li>
                    <li>
                      <h5>Auction Ending In</h5>
                      <div class="countdown-wrap">
                        <img src="assets/img/icons/time.svg" alt="" class="svg" />
                        <ul class="countdown">
                          <li><span class="hours">00</span></li>
                          <li class="ms-1 me-1">:</li>
                          <li><span class="minutes">00</span></li>
                          <li class="ms-1 me-1">:</li>
                          <li><span class="seconds">00</span></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  <div class="button-group">
                    <a href="#" class="btn-circle love-react mr-10"></a>
                    <div class="dropdown mr-10">
                      <button
                        class="btn-circle dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <img
                          src="assets/img/icons/share.svg"
                          alt=""
                          class="svg"
                        />
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a
                            class="dropdown-item"
                            target="_blank"
                            href="https://www.facebook.com/"
                            ><img src="assets/img/icons/facebook.svg" alt="" />
                            Share on Facebook</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            target="_blank"
                            href="https://www.twitter.com/"
                            ><img src="assets/img/icons/twitter.svg" alt="" />
                            Share on Twitter</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            target="_blank"
                            href="https://www.instagram.com/"
                            ><img src="assets/img/icons/instagram.svg" alt="" />
                            Share on Instagram</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            target="_blank"
                            href="https://www.linkedin.com/"
                            ><img src="assets/img/icons/linkedin.svg" alt="" />
                            Share on Linkedin</a
                          >
                        </li>
                      </ul>
                    </div>
                    <a href="item-details.html" class="btn btn-sm"
                      ><img
                        src="assets/img/icons/judge-icon.svg"
                        alt=""
                        class="svg"
                      />
                      Place Bid</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}