
import { create } from "zustand";
import axioinstance from "../axios";
import axios from "axios";

export let usedoctorstore=create((set)=>({
    Doctors:[],
    loading:false,


adddoctor:async (doctordata)=>{
    set({
        loading:true
    })
    try {
        
        const response = await axios.post('http://localhost:3000/api/adddoctor', doctordata, { withCredentials: true });
        
        set((doctorstate)=>({
            Doctors:[...doctorstate.Doctors, response.data]
        }))
    } catch (error) {
        console.log(error.message)
    }
},
getdoctor:async()=>{
    set({loading:true})
    try {
      let response=await axioinstance.get("http://localhost:3000/api/getdoctor")
      set({Doctors:response.data.getdoctor, loading:false})  
        console.log(response.data.getdoctor)
    } catch (error) {
        console.log(error)
    }
}



}))