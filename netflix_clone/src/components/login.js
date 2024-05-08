import React from 'react';
import Header from './header';

const Login = () => {
  return (
    <div >
      <Header/>
      <div className="absolute">
        <img className="  w-[100vw] h-[100vh]" 
        src="https://flexsub.shop/content/images/2021/11/1_5lyavS59mazOFnb55Z6znQ.png" alt="netflix-banner"/>
      </div>
      <form className="p-12 absolute top-12 left-0 right-0 flex flex-col w-3/12 items-center justify-center mx-auto my-36 bg-black">
        <h1 className="text-white text-3xl font-bold mb-4">Login</h1>
         <div className="flex flex-col">
         {/* <label className="text-white font-bold ">Full name</label>
         <input type="text" className="outline-none p-3 my-2"  /> */}
         <label className="text-white font-bold">Email</label>
         <input type="text" className="outline-none p-3 my-2" />
         <label className="text-white font-bold">Password</label>
         <input type="text"  className="outline-none p-3 my-2" />

         <button type="submit" className=" bg-red-500 font-bold outline-none p-3 my-2 text-white">Login</button>
         </div>
      </form>
    </div>
  );
}

export default Login;