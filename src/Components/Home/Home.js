import React from 'react'
import Registration from '../Registrtaion/Registration'
import About from '../About/About'
import Questions from '../Questions/Questions'
import Footer from '../Footer/Footer'
import Team from '../Team/Team'
import ProductFeature from '../ProductFetaure/ProductFeature'

export default function Home() {
  return (
    <div><Registration/>
      <ProductFeature/>  
    <About/>
    <Questions/>
    <Team/>
    <Footer/>
    </div>
  )
}
