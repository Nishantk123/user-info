import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () =>{
    const [userData, setUserData] = useState([])

    useEffect(()=>{
        axios.get("https://reqres.in/api/users")
        .then(res =>{
            console.log(res.data)
            setUserData(res.data.data)
        })
    },[])

    return(
        <div className="container">
           <div className="row">
               {
                   userData.map((data, index)=>{
                       console.log(data);
                       return(
                           <div className="col-sm-4 my-3" key={index}>
                            <div className="card">
                                <div className="card-body text-center">
                                    <div className="">
                                        <img src={data.avatar} />
                                    </div>
                                    <div className="text-center">
                                        {data.first_name +" " + data.last_name}
                                    </div>
                                    <div>
                                        {data.email}
                                    </div>
                                </div>
                            </div>
                            </div>
                       )
                   })
               }
           </div>
        </div>
    )
}


export default User;