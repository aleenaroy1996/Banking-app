import React from "react";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import axios from 'axios';

export const Dashboard = ()=>{
    let navigate = useNavigate();
    const [error,setError] = useState('');


    // setUserName(sessionStorage.getItem("user"));

    const getDetails = (e)=>{
        
        e.preventDefault();
        // console.log(userName);
        
        axios.get('http://localhost:8080/details',{
            params: {
                userName:sessionStorage.getItem("userName")
            }

        }).then(res =>{
            sessionStorage.setItem("name",res.data.name);
            sessionStorage.setItem("username",res.data.userName);
            sessionStorage.setItem("accountType",res.data.accountType);
            sessionStorage.setItem("address",res.data.address);
            sessionStorage.setItem("country",res.data.country);
            sessionStorage.setItem("state",res.data.state);
            sessionStorage.setItem("email",res.data.email);
            sessionStorage.setItem("contactNo",res.data.contactNo);
            navigate('/account');

           
        }).catch((err)=>{
            /// console.log(err.message);        
            setError("Something went wrong!!" + err.message);});
       ;

        // sessionStorage.clear();
    }

    
    
    return (
        <div>
            <h2>My Dashboard</h2>
            <button  onClick={()=>navigate('/loan')} className="link-btn" >Apply Loan</button>
            <button  onClick={getDetails} className="link-btn" >My Details</button>
            <button  onClick={()=>navigate('/deposit')}className="link-btn" >Deposit Money</button>
            {error && <p>{error}</p>}
        </div> 
    )
} 