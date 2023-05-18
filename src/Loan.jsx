import {useState} from "react";
import axios from 'axios';

export const Loan = ()=>{

    const [loanType,setLoanType] = useState('');
    const [loanAmount,setLoanAmount] = useState('');
    const [applyDate,setApplyDate] = useState('');
    const [interestRate,setInterestRate] = useState('');
    const [duration,setDuration] = useState('');
    const [data,setData] = useState('');
    const [error,setError] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        const loan ={
            type: loanType,
            amount:loanAmount , 
            applyDate: applyDate,
            interestRate: interestRate,
            duration: duration,
        }

        axios.post('http://localhost:8080/apply',loan,{
            params: {
                    userName:sessionStorage.getItem("userName")
                }
        }).then(res =>
            {
                if(res.status ===200 ){
                    setData("Loan Applied Successfully!!!");

                }
            }).catch((err)=>{
                 /// console.log(err.message);        
                 setError("Something went wrong!!" + err.message);});
            ;

    }

    return (
        <div className="auth-form-container">
            <h2>Loan Application</h2>
            
            <form className="register-form"  onSubmit={handleSubmit}>
                
                <label htmlFor="accountType">Loan Type</label>
                <select className ="dropdown-container" value={loanType} onChange={(e)=>setLoanType(e.target.value)} id="loanType" name="loanType" required>
                    <option className="dropdown-input" >--Select Account Type--</option>
                    <option className="dropdown-input" value="Education">Education Loan</option>
                    <option className="dropdown-input" value="Home/Personal">Home/Personal Loan</option>
                </select>

                <label htmlFor="loanAmount" >Loan Amount</label>
                <input value={loanAmount} onChange={(e)=>setLoanAmount(e.target.value)} type="number" min="0" id="loanAmount" name="loanAmount" placeholder="Enter the Loan Amount" required/>
                
                <label htmlFor="applyDate">Loan Apply Date</label>
                <input value={applyDate} onChange={(e)=>setApplyDate(e.target.value)} type="date"  id="applyDate" name="applyDate" placeholder="DD/MM/YYYY" required/>

                <label htmlFor="interestRate" >Rate Of Interest</label>
                <input value={interestRate} onChange={(e)=>setInterestRate(e.target.value)}  id="interestRate" name="interestRate" placeholder="Enter the desired ROI" required/>
                
                <label htmlFor="duration">Duration of the Loan</label>
                <input value={duration} onChange={(e)=>setDuration(e.target.value)} id="duration" name="codurationuntry" placeholder="Enter the desired duration" required/>

               
                <button type="submit">Apply Loan</button>
            </form>
            {data && <p>{data}</p>}
            {error && <p>{error}</p>}
        </div>
    )
} 