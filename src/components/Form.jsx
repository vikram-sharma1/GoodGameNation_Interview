import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataShow from './DataShow';


const Form = () => {



    const [data, setData] = useState({
        username : "",
        emailid : "",
        mobile:"",
        des:""
    })

    const [formData, setFormData] = useState([])

    useEffect(()=>{
        getData()
   },[formData])

   const handleChange = (e) => {
   
    const {id,value} =e.target;
    setData({
        ...data,
        [id]:value,
    })


   }

   const handleSubmit = (e) => {
       e.preventDefault()
    //    console.log(data)

       axios.post("http://localhost:8080/form",data).then(()=>{
        alert("data Successfully registered");
        setFormData({
            username : "",
            emailid : "",
            mobile:"",
            des:""
        })
    }).then(()=>{
        getData()
    });
   }

  


   const getData = () => {
        axios.get(`http://localhost:8080/form`).then((res)=>{
            setFormData(res.data);
        })

        // console.log(formData)
   }



  return (
    <>
       
        <form onSubmit={
            handleSubmit

        
        } >
            <input type="text" placeholder='username' id='username' value={data.username}
                onChange={
                    handleChange
            }  />
            <br />
            <input type="text" placeholder='emailid'  id='emailid' value={data.emailid} onChange={
                    handleChange
            } />
            <br />
            <input type="text" placeholder='mobile number' id='mobile' value={data.mobile}
           onChange={
            handleChange
    } />
            <br />
            <input type="text" placeholder='description' id='des' value={data.des} onChange={
                    handleChange
            }
             />
            <br />
            {/* <button>submit</button> */}
            <input type="submit" />
        </form>
   
            <h1>Data Show</h1>
            <DataShow data={formData} getData = {getData} />
    </>
  )
}

export default Form