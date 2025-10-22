import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";





function Findus() {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us On</h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100  justify-start join-item">
            <FaFacebook />
            Facebook
          </button>
          <button className="btn bg-base-100  justify-start join-item">
            <FaXTwitter />
            Twiter
          </button>
          <button className="btn bg-base-100  justify-start join-item">
            <FaInstagram/>
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
}

export default Findus