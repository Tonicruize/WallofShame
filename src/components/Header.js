import React from "react";


export default function Header(){
    return(
      <header className="header">
      <div className="header-main style--two love-sticky fixed-top">
        <div className="container">
          <div className="header-inner position-relative px-0 bg-transparent">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6 col-sm-9 col-6">
                <div className="d-flex align-items-center">
                  <div className="logo">
                    <a href="index-2.html"
                      ><img
                        src="assets/img/logo.svg"
                        className="main-logo"
                        alt="" />
                      <img
                        src="assets/img/sticky-logo.svg"
                        className="sticky-logo"
                        alt=""
                    /></a>
                  </div>
                  <form className="search-form d-none d-sm-block ms-4" action="#">
                    <div className="form-group">
                      <button type="submit">
                        <img
                          src="assets/img/icons/search-gradient.svg"
                          className="svg"
                          alt=""
                        />
                      </button>
                      <input
                        type="text"
                        className="form-control mb-0"
                        placeholder="Search item…"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="col-lg-8 col-md-6 col-sm-3 col-6 d-flex align-items-center justify-content-end position-static"
              >
                <div className="nav-wrapper d-flex align-items-center">
                  <div className="nav-wrap-inner">
                    <ul className="nav">
                      <li className="current-menu-parent">
                        <a href="#">Home</a>
                        <ul className="sub-menu">
                          <li><a href="index-2.html">Home V1</a></li>
                          <li><a href="home-v2.html">Home V2</a></li>
                          <li className="current-menu-children">
                            <a href="home-v3.html">Home V3</a>
                          </li>
                          <li><a href="home-v4.html">Home V4</a></li>
                          <li><a href="home-v5.html">Home V5</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Explore</a>
                        <ul className="sub-menu">
                          <li><a href="explore.html">Explore</a></li>
                          <li><a href="profile.html">Profile</a></li>
                          <li><a href="create.html">Create</a></li>
                          <li><a href="wallet.html">Wallet</a></li>
                          <li><a href="help-center.html">Help Center</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li><a href="author.html">Author</a></li>
                          <li><a href="ranking.html">ranking</a></li>
                          <li><a href="collection.html">Collection</a></li>
                          <li><a href="item-details.html">Item Details</a></li>
                          <li><a href="activity.html">Activity</a></li>
                          <li><a href="upload.html">Upload</a></li>
                          <li><a href="profile-edit.html">Profile Edit</a></li>
                          <li><a href="login.html">Login</a></li>
                          <li><a href="register.html">Register</a></li>
                          <li><a href="404.html">404</a></li>
                          <li><a href="coming-soon.html">Coming Soon</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li><a href="blog.html">Blog</a></li>
                          <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                      </li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </div>
                  <div className="d-none d-md-flex align-items-center ms-4">
                    <a href="create.html" className="btn"
                      ><img
                        src="assets/img/icons/create-icon.svg"
                        alt=""
                        className="svg"
                      />
                      Create</a
                    >
                    <div className="dropdown ml-10">
                      <a
                        href="#"
                        className="user-avatar dropdown-toggle"
                        data-bs-toggle="dropdown"
                        ><img src="assets/img/media/user.png" alt="" />
                        <span className="user-status"
                          ><img
                            src="assets/img/icons/check.svg"
                            className="svg"
                            alt="" /></span
                      ></a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="profile.html"
                            ><img src="assets/img/icons/profile.svg" alt="" />
                            Profile</a
                          >
                        </li>
                        <li>
                          <a className="dropdown-item" href="create.html"
                            ><img src="assets/img/icons/create.svg" alt="" />
                            Create</a
                          >
                        </li>
                        <li>
                          <a className="dropdown-item" href="collection.html"
                            ><img
                              src="assets/img/icons/collection.svg"
                              alt=""
                            />
                            Collection</a
                          >
                        </li>
                        <li>
                          <a className="dropdown-item" href="wallet.html"
                            ><img src="assets/img/icons/wallet.svg" alt="" />
                            Wallet</a
                          >
                        </li>
                        <li>
                          <a className="dropdown-item" href="explore.html"
                            ><img src="assets/img/icons/explore.svg" alt="" />
                            Explore</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    );
}