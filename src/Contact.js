import React, {useState} from 'react';
import Layout from './Layout';
import Footer from './Footer';


export default function Contact(){
    const [values, setValues] = useState({
        firstName : '',
        lastName: '',
        email: '',
        message: ''

    });
    const handleFirstNameChange = e =>{
        e.persist();
        setValues(values => ({
            ...values,
            firstName:e.target.value,
        }));       
    }
    const handleLastNameChange = e =>{
        e.persist();
        setValues(values =>({
            ...values,
            lastName:e.target.value
        }));
    }
    const handleEmailChange = e =>{
        e.persist();
        setValues(values =>({
            ...values,
            email: e.target.value
        }));
    }
    const handleMessageChange = e => {
        e.persist();
        setValues(values =>({
            ...values,
            message:e.target.value
        }))
    }
     //checking the validity of a form before it is submitted
     const [valid, setValid] = useState(false);

    //creating another state to help submit the form

    const [submitted, setSubmitted] = useState(false);
   

   
  const  handleSubmit = e =>{
        e.preventDefault();
        if(values.firstName && values.lastName && values.message && values.email){
            setValid(true);
        }
        
        setSubmitted(true);
        }
   

  
    return(
        <div className="form-container">
            <Layout/>
            <h1 id="contact">Contact Us</h1>
            <form className="form"onSubmit={handleSubmit}>
                {submitted && valid? <div className="success">Success!Your message has been submitted successfully</div>:null}
                
                <input 
                name = "firstName" 
                type="text" 
                className="input" 
                value = {values.firstName} 
                onChange = {handleFirstNameChange}
                placeholder="FirstName"/><br/>
                {submitted && !values.firstName ? <span id="error">Please Enter FirstName</span>: null}<br/>
               
                <input 
                name="lastName"
                type="text" 
                className="input" 
                value = {values.lastName} 
                onChange={handleLastNameChange}
                placeholder="LastName"/><br/>
                {submitted && !values.lastName ? <span id="error">Please Enter LastName</span>:null}<br/>
              
                <input 
                name="email" 
                type="email" 
                className="input" 
                value= {values.email} 
                onChange = {handleEmailChange}
                placeholder="Email"/><br/>
                {submitted && !values.email ? <span id="error">Please Enter Email Adress</span>:null}<br/>
                
                <textarea 
                name="message" 
                type = "text" 
                className="input textarea" 
                value = {values.message} 
                onChange={handleMessageChange}
                placeholder="Message" rows={7}/><br/>
                {submitted && !values.message ?<span id="error">Please Enter Message</span>:null}<br/>
                <button type="submit" className="submit">Submit</button>
             
               
            </form>
         
            <Footer/>
        </div>
    )
}