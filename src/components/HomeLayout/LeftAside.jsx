import React, { Suspense } from 'react'
import Categoris from '../Categoris'

function LeftAside() {
  return (
    <>
      <Suspense
        fallback={<span className="loading loading-infinity loading-xl"></span>}
      >
        <Categoris />
      </Suspense>
    </>
  );
}

export default LeftAside