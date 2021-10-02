import React, { useState } from "react";
import { Form,Button,Alert } from "react-bootstrap";
function UserForm()
{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [emailError,setEmailError]=useState("");
    const [passwordError,setPasswordError]=useState("");
    const handleSubmit=(event)=>{
        event.preventDefault();
        var emailValid=false;
        var passwordValid=false;
        console.log("hello")
        if(email.length==0)
        {
            setEmailError("email is required");
        }
        else if(email.length<6)
        {
            setEmailError("email should be minimum 6 characters");
        }
        else if(email.indexOf(" ")>0)
        {
            setEmailError("Email cannot have spaces");
        }
        else
        {
            setEmailError("");
            emailValid=true;
        }
        if(password.length==0)
        {
            setPasswordError("password is required");
        }
        else if(password.length<6)
        {
            setPasswordError("password should be minimum 6 characters");
        }
        else if(password.indexOf(" ")>0)
        {
            setPasswordError("password cannot have spaces");
        }
        else if(!(/['A'-'Z']/.test(password)))
        {
            setPasswordError("password should have capital letter");
        }
        else if(!(/\d/.test(password)))
        {
            setPasswordError("password should have digit");
        }
        else
        {
            passwordValid=true;
            setPasswordError("");
        }
        if(emailValid&&passwordValid)
        {
            alert('Email:'+email+'\n Password'+password);
            setEmail("");
            setPassword("");
        }
    }
    return(
        <div>
        <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={event=>setEmail(event.target.value)} value={email}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
{emailError.length>0&&<Alert variant="danger">{emailError}</Alert>}
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder=" enter Password" onChange={event=>setPassword(event.target.value)} value={password}/>
  </Form.Group>
  {passwordError.length>0&&<Alert variant="danger">{passwordError}</Alert>}
  <Button variant="primary" type="submit" >
    Submit
  </Button>

</Form>
email:{email}
<br/>
passworggd:{password}
</div>
    );
}
export default UserForm;