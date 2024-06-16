import { useState } from "react";

function Form() {
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(text);
    console.log(email);


    const SubmitForm = (e)=>{
        e.preventDefault();
        console.log(e.target.text.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
    }
    const textInput = (e)=>{
        setText(e.target.value)
    }

    const emailInput = (e)=>{
        setEmail(e.target.value);
    }
    
    const passwordInput = (e)=>{
        setPassword(e.target.value)
    }

  return (
    <div className="text-center mt-14">
    <form onSubmit={SubmitForm} action="">
    <input onChange={textInput} className="bg-blue-800 mb-4 text-white px-5 py-2" type="text" name="text" id="" placeholder="Enter Your Name" /> <br />
    <input onChange={emailInput} className="bg-blue-800 mb-4 text-white px-5 py-2" type="email" name="email" id="" placeholder="Enter Your Email"/> <br />
    <input onChange={passwordInput} className="bg-blue-800 mb-4 text-white px-5 py-2" type="password" name="password" id="" placeholder="Enter Your Password"/> <br />
    <input className="bg-green-600 text-white font-bold py-2 px-5" type="submit" value="Submit" />
    </form>
    </div>
  )
}

export default Form