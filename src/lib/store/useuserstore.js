// src/store/useUserStore.js
import { create } from 'zustand';
import axioinstance from '../axios';


// Zustand store
const useuserStore = create((set) => ({
  user: null, // Yeh state user data store karega
loading:true,
  // Register function jo backend ko call karega
  register: async (userData) => {
    // const{name, email, password}:userData
    set({loading:true})
    try {
      const response = await axioinstance.post(' http://localhost:3000/api/register', {userData}); // Backend API ka URL

      // Agar successful ho to user data ko set karo
      set({ user: response.data, loading:false })
      return response.data; 
    } catch (error) {
      console.error('Error during registration:', error);
      throw error; 
    
    }
  },
 


login:async(email, password)=>{
    set({loading:true})
    try {
        let response=await axioinstance.post("http://localhost:3000/api/loginpatient",
            email,
            password
        )
        set({user:response.data , loading:false})
        // return response.data
    } catch (error) {
        console.log(error)
    }
}
}));

export default useuserStore;
