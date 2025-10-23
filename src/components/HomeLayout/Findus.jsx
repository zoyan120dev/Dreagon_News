import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";





function Findus() {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us On</h2>
      <div>
        <div className="join join-vertical w-full">
          <a
            href="https://www.facebook.com/"
            className="btn bg-base-100  justify-start join-item"
          >
            <FaFacebook />
            Facebook
          </a>
          <a
            href="https://x.com"
            className="btn bg-base-100  justify-start join-item"
          >
            <FaXTwitter />
            Twiter
          </a>
          <a
            href="https://www.instagram.com/"
            className="btn bg-base-100  justify-start join-item"
          >
            <FaInstagram />
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Findus