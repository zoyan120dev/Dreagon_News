import React from 'react'
import Marquee from 'react-fast-marquee'

function LatesNews() {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Lastest</p>
      <Marquee className='flex gap-5 items-center' pauseOnHover={true} speed={70}>
        <p className="font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, harum?
        </p>
        <p className="font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, harum?
        </p>
        <p className="font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, harum?
        </p>
        <p className="font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, harum?
        </p>
      </Marquee>
    </div>
  );
}

export default LatesNews