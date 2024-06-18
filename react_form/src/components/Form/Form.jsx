import { useState } from "react";

function Form() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    
    if (password.length < 8) {
      setError("Please Enter 8 Character");
    } else {
      setError("");
      console.log(text);
      console.log(email);
      console.log(password);
    }

  };

  return (
    <div className="text-center mt-14">
      <form onSubmit={handleSubmitForm} action="">
        <input
          onChange={(e) => setText(e.target.value)}
          className="bg-blue-800 mb-4 text-white px-5 py-2"
          type="text"
          name="text"
          id=""
          placeholder="Enter Your Name"
          required
        />
        <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="bg-blue-800 mb-4 text-white px-5 py-2"
          type="email"
          name="email"
          id=""
          placeholder="Enter Your Email"
          required
        />
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="bg-blue-800 mb-4 text-white px-5 py-2"
          type="password"
          name="password"
          id=""
          placeholder="Enter Your Password"
          required
        />
        <br />
        <small>{error}</small> <br />
        <input
          className="bg-green-600 text-white font-bold py-2 px-5"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default Form;
