import React from 'react'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import { Createpatientformm } from './components/Createpatientformm'
import { Sendmesageform } from './components/Sendmesageform'
import Messages from './components/Messages'
import DoctorRegistrationForm from './components/DoctorRegistrationForm'
import DoctorList from './components/DoctorList'
import PatientList from './components/PatientList'
import { Swiper } from './components/Swiper'
import { Createappointmentform } from './components/Createappointmentform'
import { Appointmentlist } from './components/Appointmentlist'
import Adminpannel from './components/Adminpannel'
import Layout from './components/fontenedpages/Layout'
import Home from './components/fontenedpages/Home'
import Contact from './components/fontenedpages/Contact'

const App = () => {
  return (
    <div>
   <Layout>
<Routes>
{/* <DoctorSlider/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/PatientList' element={<PatientList/>}/>
        <Route path='/sendmessageform' element={<Sendmesageform/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/doctorregisteration' element={<DoctorRegistrationForm/>}/>
        <Route path='/doctorlist' element={<DoctorList/>}/>
        <Route path='/gettreatment' element={<Swiper/>}/>
        <Route path='/createappointment' element={<Createappointmentform/>}/>
        <Route path='/appointments' element={<Appointmentlist/>}/>
        <Route path='/contact' element={<Contact/>}/>
    
        <Route path='/Createpatientformm' element={<Createpatientformm/>}/>
        <Route path='/admin' element={<Adminpannel/>}/>
      </Routes>
        </Layout>
    </div>
  )
}

export default App