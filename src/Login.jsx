import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';



export const Login = () =>{

    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [data,setData] = useState('');
    const [error,setError] = useState('');

    //const [result,setResult] = useState('');

    let navigate = useNavigate();

    

    const handleSubmit = (e) =>{
        
        e.preventDefault();
        console.log(userName);

    
    

        

         //GET REQUEST FOR REST API - working
        // axios.get('http://localhost:8080/login', {
        //     params: {
        //         "userName":userName,
        //         "password":password
        //     }

        // }).then(res =>
        //     {
        //         if(res.status ===200 && res.data ==="Logged in successfully!!!"){
        //             sessionStorage.setItem("userName", userName);
        //             navigate("/dashboard")
        //         }else{
        //             setData(res.data);
        //         }
        //     }).catch((err)=>{
        //         /// console.log(err.message);        
        //         setError("Something went wrong!!" + err.message);});
        //    ;
        

        // GET REQUEST FOR GRAPHQL API - working

        axios.post("http://localhost:8080/graphql", {
            query:`query($nameInput:String, $passwordInput:String)
            { 
                login(nameInput:$nameInput,passwordInput:$passwordInput) 
            }`,
            variables:{
                nameInput:userName,
                passwordInput:password }
            },{
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then((response)=>
               { if(response.status===200 && response.data.data.login==="Logged in successfully!!!") {
                 console.log(response.data.data.login);
                 sessionStorage.setItem("userName", userName);
                 navigate("/dashboard")
                 }else{
                     setData(response.data.data.login);
                     }
                })
                .catch((err)=>{
                            /// console.log(err.message);        
                            setError("Something went wrong!!" + err.message);});
              
        

        
        
     

}
        
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="userName">User Name</label>
                <input value={userName} onChange={(e) => setUserName(e.target.value)}  placeholder="Enter you username" id="userName" name="userName" required/>
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="******" id="password" name="password" required/>
                <button type="submit">Login</button><br/><br/>
                {data && <p>{data}</p>}
                {error && <p>{error}</p>}
            </form>
            <button onClick={()=>navigate('/register')} className="link-btn" >Don't have an account? Register here.</button>
        </div>
   ) 
}