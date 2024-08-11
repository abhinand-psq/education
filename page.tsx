import Image from "next/image";
import Link from "next/link";
import React from "react";
import fs from 'fs'
import imageToBase64 from 'image-to-base64'
import { cwd } from "process";
const sample = async()=>{


  
  
  fetch('http://localhost:3000/api/found',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    }
   })
}


let path = cwd()
// let value = fs.readFileSync(`${path}/public/google.png`,'base64')
// console.log(value);
// const buffer = Buffer.from(value, "base64");
// console.log(buffer);
// fs.writeFileSync('./sample.png',buffer);

// let img = fs.readFileSync(`${path}/public/cart.png`)
// console.log(img);
// fs.writeFileSync('./simplegg.png',img);

const LoginPage = () => {

  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* BOX */}
      <Image  src={`/google.png`} alt="oo" width={230} height={224}></Image>
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt="" fill className="object-cover"/>
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm">
            Have a problem?<Link className="underline" href="/"> Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
