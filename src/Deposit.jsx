import {useState} from "react";
import axios from 'axios';

export const Deposit = ()=>{

    const [userName,setUserName] = useState('');
    const [deposit,setDeposit] = useState('');
    const [accountType,setAccountType] = useState('');
    const [data,setData] = useState('');
    const [error,setError] = useState('');

    // setName(sessionStorage.getItem("name"));
    // setUserName(sessionStorage.getItem("userName"));
    // setAddress(sessionStorage.getItem("address"));
    // setCountry(sessionStorage.getItem("country"));
    // setState(sessionStorage.getItem("state"));
    // setEmail(sessionStorage.getItem("email"));
    // setAccountType(sessionStorage.getItem("accountType"));
    // setContactNo(sessionStorage.getItem("contactNo"));

    const depositMoney = (e)=>{
        
        e.preventDefault();
        // console.log(sessionStorage.getItem("userName"));
        setUserName(sessionStorage.getItem("userName"));
        console.log(userName)
        axios.put('http://localhost:8080/deposit',null,{
            params: {
                    userName:sessionStorage.getItem("userName"),
                    accountType:accountType,
                    amount:deposit
                }
        }).then(res =>{
            if("Invalid Account Type"=== res.data || "Invalid User" === res.data){
                console.log(res.data);
                setData(res.data);
            }
            else{
                setData("Deposit Completed !!! Your current balance is: "+res.data);
            }
        }).catch((err)=>{
            /// console.log(err.message);        
            setError("Something went wrong!!" + err.message);});
       ;
        // sessionStorage.clear();
    }

    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={depositMoney}>
            <label htmlFor="accountType">Account Type</label>
            <input value={accountType} onChange={(e)=>setAccountType(e.target.value)} id="accountType" name="state" placeholder="Enter your Account Type" required/>

            <label htmlFor="deposit" >Deposit Amount</label>
            <input value={deposit} onChange={(e)=>setDeposit(e.target.value)} type="number" min="0" id="initialDeposit" placeholder="Enter the Amount" name="initialDeposit" required/>                
            <button type="submit">Deposit</button>
            </form>
            {data && <p> {data}</p>}
            {error && <p> {error}</p>}
        </div> 
    )
} 