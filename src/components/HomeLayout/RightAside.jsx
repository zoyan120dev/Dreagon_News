import React from 'react'
import SocialLogin from './SocialLogin'
import Findus from './Findus'
import Qzone from '../Qzone'

function RightAside() {
  return (
    <div className='space-y-5'>
        <SocialLogin/>
        <Findus/>
        <Qzone/>
    </div>
  )
}

export default RightAside