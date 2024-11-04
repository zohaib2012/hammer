import React from 'react'
import DoctorSlider from './DoctorSlider'
import { Swiper } from '../Swiper'
import TreatmentSlider from './TreatmentSlider'
import { Createpatientformm } from '../Createpatientformm'

const Home = () => {
  return (
    <div>
        <TreatmentSlider/>
        <DoctorSlider/>
        <Swiper/>
        <Createpatientformm/>
         
    </div>
  )
}

export default Home