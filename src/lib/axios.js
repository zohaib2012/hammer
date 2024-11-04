import axios from "axios";


let axioinstance=axios.create({
    baseurl:"http://localhost:3000/api",
  
    withCredentials:true
})
export default axioinstance