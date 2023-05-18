import React,{useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const Register = () =>{
    const [name,setName] = useState('');
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [address,setAddress] = useState('');
    const [country,setCountry] = useState('');
    const [state,setState] = useState('');
    const [email,setEmail] = useState('');
    const [contactNo,setContactNo] = useState('');
    const [birthDate,setBirthDate] = useState('');
    const [accountType,setAccountType] = useState('');
    const [branchName,setBranchName] = useState('');
    const [initialDeposit,setInitialDeposit] = useState('');
    const [proofType,setProofType] = useState('');
    const [documentNo,setDocumentNo] = useState('');

    const [data,setData] = useState('');
    const [error,setError] = useState('');

    let navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(userName);

        // const graphqlQuery = {
        //     query: `mutation register(
        //         customer: {
        //           "name": name,
        //           "userName":userName , 
        //           "password": password,
        //           "address": address,
        //           "country": country,
        //           "state": state, 
        //           "email": email, 
        //           "contactNo": contactNo, 
        //           "birthDate": birthDate, 
        //           "accountType": accountType, 
        //           "initialDeposit": initialDeposit, 
        //           "branchName": branchName, 
        //           "proofType": proofType, 
        //           "documentNo": documentNo
        //       })`,
        //     "variables": {}
        // };

        // axios.post('http://localhost:8080/graphql', graphqlQuery,{
        //     headers: {
        //         "content-type": "application/json"
        //     }})
        // .then(res =>setData(res.data));
        // .then(res =>
        //     {
        //         if(res.status===200 ||res.status===201){
        //             toast(res.data,{position: toast.POSITION.TOP_CENTER})
        //         }else{
        //             toast("Something Went Wrong!!! Please try again",{position: toast.POSITION.TOP_CENTER})
        //         }
        //     });

        // fetch("http://localhost:8080/register",{
        //     method:"POST",
        //     headers:{"Content-Type":"application/json"},
        //     body:JSON.stringify(user)
        // })
        // .then(res =>
        //     {
        //         if(res.status===200){
        //             setData("User Already Exits!!!");
        //         }
        //         else if(res.status===201){
        //             setData("User Registered Successfully!!");
        //         }else{
        //             setData("Something Went Wrong!!! Please try again");
        //         }
        //     });

        //// GET REQUEST FOR REST API - working
        // const user ={
        //     "name": name,
        //     "userName":userName , 
        //     "password": password,
        //     "address": address,
        //     "country": country,
        //     "state": state, 
        //     "email": email, 
        //     "contactNo": contactNo, 
        //     "birthDate": birthDate, 
        //     "accountType": accountType, 
        //     "initialDeposit": initialDeposit, 
        //     "branchName": branchName, 
        //     "proofType": proofType, 
        //     "documentNo": documentNo
        // }

        // axios.post('http://localhost:8080/register',user)
        // .then(res =>setData(res.data))
        // .catch((err)=>{
        //         /// console.log(err.message);        
        //         setError("Something went wrong!!" + err.message);});
        //    ;

        // GET REQUEST FOR GRAPHQL API - working
        
        axios.post("http://localhost:8080/graphql", {
        query:`mutation($name:String, $userName:String,$password:String,
            $address:String,$country:String,$state:String,$email:String,
            $contactNo:Float,$birthDate:String,$accountType:String,
            $initialDeposit:Float,$branchName:String,$proofType:String,$documentNo:String){
            register(
              customer: {name:$name, userName:$userName , password: $password, 
              address: $address, country: $country, state: $state, email: $email,
              contactNo: $contactNo, birthDate: $birthDate, accountType: $accountType, 
              initialDeposit: $initialDeposit, branchName: $branchName, 
              proofType: $proofType, documentNo:$documentNo}
            )
          }`,
        variables:{
            name:name,
            userName:userName,
            password:password,
            address:address,
            country:country,
            state:state,
            email:email,
            contactNo:contactNo,
            birthDate:birthDate,
            accountType:accountType,
            initialDeposit:initialDeposit,
            branchName:branchName,
            proofType:proofType,
            documentNo:documentNo
         }
        },{
            headers: {
                'Content-Type': 'application/json'
            }
            }).then((response)=>
            { 
                console.log(response.status)
                console.log(response.data.data)
                setData(response.data.data.register)
            })
            .catch((err)=>{
                        /// console.log(err.message);        
                        setError("Something went wrong!!" + err.message);});
            
        

    
    }

    const onInputChange = (e) => {
        const val = e.target.value;
        console.log('Input value: ', val);
     
        const re = /^[a-zA-Z ]*$/;
        if (val === "" || re.test(val)) {
          setName(val);
        }
      }
    

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            
            <form className="register-form" onSubmit={handleSubmit}>
                
                <label htmlFor="name">Full Name</label>
                <input value={name} onChange={onInputChange} id="name" name="name" placeholder="Enter your full name" required/>
                
                <label htmlFor="userName">User Name</label>
                <input value={userName} onChange={(e)=>setUserName(e.target.value)} id="userName" name="userName" placeholder="Enter a username" required/>

                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="******" id="password" name="password" required/>
                
                <label htmlFor="address">Address</label>
                <input value={address} onChange={(e)=>setAddress(e.target.value)} id="address" name="address" placeholder="Enter your address" required/>
                
                <label htmlFor="country">Country</label>
                <input value={country} onChange={(e)=>setCountry(e.target.value)} id="country" name="country" placeholder="Enter your country" required/>

                <label htmlFor="state">State</label>
                <input value={state} onChange={(e)=>setState(e.target.value)} id="state" name="state" placeholder="Enter your state" required/>

                <label htmlFor="email">Email Address</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Youremail@example.com" required/>
                            
                <label htmlFor="contactNo">Contact Number</label>
                <input value={contactNo} onChange={(e)=>setContactNo(e.target.value)}  id="contactNo" name="contactNo" pattern="\d{10}"  placeholder="Enter a valid 10 digit contact number" required/>
                
                <label htmlFor="birthDate">Date Of Birth</label>
                <input value={birthDate} onChange={(e)=>setBirthDate(e.target.value)} type="date"  id="birthDate" name="birthDate" placeholder="DD/MM/YYYY" required/>
                
                <label htmlFor="accountType">Account Type</label>
                <select className ="dropdown-container" value={accountType} onChange={(e)=>setAccountType(e.target.value)} id="accountType" name="accountType" required>
                    <option className="dropdown-input" >--Select Account Type--</option>
                    <option className="dropdown-input" value="Salary" >Salary</option>
                    <option className="dropdown-input" value="Savings">Savings</option>
                </select>
                {/* //<input value={accountType} onChange={(e)=>setAccountType(e.target.value)}  id="accountType" name="accountType" required/> */}
                    
                
                <label htmlFor="branchName">Branch Name</label>
                <input value={branchName} onChange={(e)=>setBranchName(e.target.value)}  id="branchName" name="branchName" required/>
                
                <label htmlFor="initialDeposit" >Initial Deposit Amount</label>
                <input className="dropdown-input" value={initialDeposit} onChange={(e)=>setInitialDeposit(e.target.value)} type="number" min="0" id="initialDeposit" name="initialDeposit" required/>                

                <label htmlFor="proofType">Identity Proof Type</label>
                <input value={proofType} onChange={(e)=>setProofType(e.target.value)}  id="proofType" name="proofType" required/>
                
                <label htmlFor="documentNo">Identity Document Number</label>
                <input value={documentNo} onChange={(e)=>setDocumentNo(e.target.value)}  id="documentNo" name="documentNo" required/>
                

                <button type="submit">Register</button>
            </form>
            {data && <p>{data}</p>}
            {error && <p>{error}</p>}
            <button onClick={()=>navigate('/')} className="link-btn" >Already have an account? Login here.</button>
        </div>
   ) 
}