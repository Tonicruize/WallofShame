import React from 'react';

const IconTextCard = ({ icon, heading, text }) => {
  return (

  
    <div class="col-xl-3 col-lg-4 col-md-6">
    <div class="selling-process text-center text-white">
      <div class="icon">
        <img src={icon} alt="" />
      </div>
      <div class="content">
        <h5>{heading}</h5>
        <p>
         {text}        </p>
      </div>
    </div>
  </div>

  );
};

export default IconTextCard;
