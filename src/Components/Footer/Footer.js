import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
    <div className='row bg-primary p-5  pt-5'>
        <div className='col-md-3 m-auto'>
            <h3>Field X</h3>
            <p>sed ut........</p>
            <span><FaTwitter/> <ImLinkedin2/> <FaFacebook/> </span>
        </div>
    </div>
  )
}
