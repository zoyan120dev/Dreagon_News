import React from 'react'
import swimmingImage from '../assets/swimming.png'
import classImage from '../assets/class.png'
import playimage from '../assets/playground.png'
function Qzone() {
  return (
    <div className="bg-base-200 p-3 rounded">
      <h2 className="font-bold mb-5">Q-Zone</h2>
      <div className="">
        <div className='space-y-5'>
          <img src={swimmingImage} alt="" />
          <img src={classImage} alt="" />
          <img src={playimage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Qzone