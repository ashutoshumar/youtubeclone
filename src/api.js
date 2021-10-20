import axios from 'axios'
console.log(process.env.REACT_API_YT_API_KEY)
const request=axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
         key:"AIzaSyBEdoI3RoQMUrrPp7-h3-J6G1uf-kePhCM",
        // key:"932751498196-4pvqgfg0rjf0f9e2hvnd1cromt6cfv9r.apps.googleusercontent.com"
    }
})

export default request