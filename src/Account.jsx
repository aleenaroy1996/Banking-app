
export const Account = ()=>{

    return (
        <div className="auth-form-container"  >
            <h2>Your Account Details!!!</h2>
            {sessionStorage.getItem("name") && <p >{sessionStorage.getItem("name")}</p>}
            {sessionStorage.getItem("userName") && <p > {sessionStorage.getItem("userName")}</p>}
            {sessionStorage.getItem("address") && <p> {sessionStorage.getItem("address")}</p>}
            {sessionStorage.getItem("country") && <p> {sessionStorage.getItem("country")}</p>}
            {sessionStorage.getItem("state") && <p> {sessionStorage.getItem("state")}</p>}
            {sessionStorage.getItem("email") && <p> {sessionStorage.getItem("email")}</p>}
            {sessionStorage.getItem("accountType") && <p> {sessionStorage.getItem("accountType")}</p>}
            {sessionStorage.getItem("contactNo") && <p> {sessionStorage.getItem("contactNo")}</p>}
        </div> 
    )
} 