import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
function UserInfo() {
    let[user,setUser]=useState([]);
    useEffect(()=>{
        axios.get("https://randomuser.me/api/?results=20")
        .then((res)=>{
            console.log(res.data.results);
            setUser(res.data.results);
           
        })
        .catch((error)=>{
            console.log(error);
            alert("SOMETHING WRONG ON FETCHING DATA");
        })
    },[])
  return (
    <div>
         <h2>USER INFORMATION</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia temporibus assumenda deleniti nostrum. Perferendis alias rerum, eligendi illo architecto voluptatem vitae, magni aperiam sequi officiis reiciendis ea nihil doloremque deserunt quibusdam cupiditate aut aliquam adipisci quam, similique nemo! Corrupti optio doloremque culpa saepe asperiores quod laudantium dolores, ea pariatur error quo eius hic deserunt, animi consequuntur rerum qui illum deleniti ipsa quidem. Et accusantium aperiam vitae ratione adipisci accusamus assumenda facilis veritatis temporibus. Maxime, repellendus officiis. Dolore voluptate, est omnis, corrupti odit labore, quidem esse vel mollitia nam maiores porro eum aliquam quisquam. Eos hic corporis ut tempora vel?</p>
         {
        user.length>0 ?
        <div>
            <table cellPadding={10} style={{margin:"10px auto"}}>
                <thead style={{backgroundColor:"black",color:"white"}}>
                    <tr>
                    <th>ID</th>
                    <th>IMAGE</th>
                    <th>NAME</th>
                    <th>GENDER</th>
                    <th>EMAIL</th>
                    <th>CITY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((element,index)=>{
                            return(
                               <tr>
                                <td>{index+1}</td>
                                <td><img src={element.picture.medium} height={80} width={80}/></td>
                                <td>{element.name.first}</td>
                                <td>{element.gender}</td>
                                <td>{element.email}</td>
                                <td>{element.location.city}</td>
                               </tr> 
                            )
                        })
                    }
                </tbody>
            </table>
            </div>:<h2 style={{color:"red"}}>NO USER INFORMATION</h2>
      }
    </div>
  )
}

export default UserInfo
