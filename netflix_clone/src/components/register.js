import React, { useState } from 'react';
import Header from './header';

const RegisterUser = () => {
  const [isLogIn,setLogin] = useState(false);
  const [fullName,setFullName] = useState("");
  const [Email,setEmail] = useState("");
  const [Password,setPassword] = useState("");

  const loginHandler = ()=>{
    setLogin(!isLogIn);
  }

  const getInputData =(e)=>{
    e.preventDefault();
    console.log(fullName);
    setFullName("");
    setEmail("");
    setPassword("");
  }
  return (
    <div>
        <Header/>
        <div className="absolute">
        <img className="  w-[100vw] h-[100vh]" 
        src="https://flexsub.shop/content/images/2021/11/1_5lyavS59mazOFnb55Z6znQ.png" alt="netflix-banner"/>
      </div>
      <form onSubmit={getInputData} className="p-12 absolute top-12 left-0 right-0 flex flex-col w-4/12 items-center justify-center mx-auto my-36 bg-black opacity-85 rounded-md">
        <h1 className="text-white text-3xl font-bold mb-4">{isLogIn?"Login":"Signup"}</h1>
         <div className="flex flex-col">
            {

              !isLogIn &&<>
              <label className="text-white font-bold ">Full name</label>
              <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type="text" placeholder='Enter name' className="outline-none p-3 my-2 rounded-md bg-gray-800 text-white" /></>
            }
         <label className="text-white font-bold">Email</label>
         <input value={Email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='email@gmail.com' className="outline-none p-3 my-2 rounded-md bg-gray-800 text-white" />
         <label className="text-white font-bold">Password</label>
         <input value={Password} onChange={(e)=>setPassword(e.target.value)} type="password"  placeholder='****' className="outline-none p-3 my-2 rounded-md bg-gray-800 text-white " />

         <button type="submit" className=" bg-red-500 font-bold outline-none p-3 my-2 text-white mt-6">{isLogIn?"Login":"Signup"}</button>
         <p className="text-white ">{isLogIn ? " New on Netflix?":"Already have an account ?"}<span onClick={loginHandler} className='font-bold text-blue-800 font-medium cursor-pointer'> {isLogIn?"Signup":"Login"}</span></p>
         </div>
      </form>
    </div>
  );
}

export default RegisterUser;