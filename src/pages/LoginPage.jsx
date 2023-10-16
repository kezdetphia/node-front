import React from "react";
import { useState } from "react";

const LoginPage = () => {
  const [buttonText, setButtonText] = useState("Login");

  const [firstName, setFirstName] = useState('')
  

  const blankForm = {
    firstName: "",
    surName: "",
    email: "",
    password: "",
    passwordAgain: "",
  };
  
  const [formData, setFormData] = useState({ blankForm });


  const handleChange=(e)=>{
    const {name, value} = e.target
    setFormData({
      ...formData, [name]: value
    })
    console.log(name, value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log('Formdata Submitted:', formData)
    setFormData(blankForm);
  }

  return (
    <div className="h-screen w-screen bg-pink-100 flex justify-center items-center">
      <div className="h-[500px] w-[400px] shadow-lg shadow-pink-300">
        <div className="pt-5 px-7">
          <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
            <div className="flex gap-x-2 ">
              <input
                className="w-full"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"
                ></input>
              <input
                type="text"
                className="w-full"
                onChange={handleChange}
                placeholder="Surname"
                name="surName"
                value={formData.surName}
                ></input>
            </div>
            <input
              type="email"
              className="w-full"
              onChange={handleChange}
              placeholder="Email addres"
              name="email"
              value={formData.email}
              ></input>
            <input
              value={formData.password}
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              ></input>
            <input
              type="password"
              onChange={handleChange}
              name="passwordAgain"
              placeholder="Password Again"
              value={formData.passwordAgain}
            ></input>
            <div>
              <button type="submit">{buttonText}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
