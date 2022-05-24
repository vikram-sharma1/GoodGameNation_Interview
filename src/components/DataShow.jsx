import axios from 'axios'
import React from 'react'

const DataShow = ({data, getData}) => {

    // console.log(data)

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/form/${id}`).then((res)=>{
            getData()
        })
    }    

  return (
    <div>
       
                <table>
                    <tbody>
                    {data.map((e)=>{
            return(
                        <tr key={e.id}>
                            <td>{e.username}</td>
                            <td>{e.emailid}</td>
                            <td>{e.mobile}</td>
                            <td>{e.des}</td>
                            <td><button>Edit</button></td>
                            <td><button
                                onClick={()=>{
                                    handleDelete(e.id)
                                }}
                            >Delete</button></td>
                        </tr>
                    
                             )
            }
                         )}     
                    </tbody>
                </table>
            
       
    </div>
  )
}

export default DataShow