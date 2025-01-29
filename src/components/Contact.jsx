import React from "react";
import { Footer } from "./Footer";
import img from "./right_img.png";
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
const Contact = () => {
  const[text,settext]=useState("Submit");
  const changetext=()=>{
    settext("Submitting...");
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f40ed057-f02d-48ff-85bc-c1a134ed6811");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message Sent Successfully");
      
    }else{
      toast.warning("Some Error Occured");
    }
   settext("Submit")
  };
  return (
    <div className="bg-slate-950 min-h-lvh pt-10 ">
      <div className="grid grid-cols-12 project">
        <div className="lg:col-span-6 col-span-8 ">
          <img
            src={img}
            className="w-102 lg:ml-16 ml-12 lg:h-[40%] sm:h-[80%]"
            alt=""
          />
        </div>
        
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <h1 className="text-teal-200 font-bold text-5xl flex direction-column justify-center">
          Let's Connect
          </h1>
          <form onSubmit={onSubmit}>
          <input type="hidden" name="access_key" value="f40ed057-f02d-48ff-85bc-c1a134ed6811"/>
          <div className="block flex direction-column justify-center pt-10">
            <input
            name="name"
              className="w-[50%] bg-transparent placeholder:text-teal-200 text-teal-200 text-sm border border-teal-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-teal-500 hover:border-teal-300"
              type="text"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="block flex direction-column justify-center pt-6">
            <input
            name="email"
              className="w-[50%] bg-transparent placeholder:text-teal-200 text-teal-200 text-sm border border-teal-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-teal-500 hover:border-teal-300"
              type="email"
              placeholder="Enter Your E-mail"
            />
          </div>
          <div className="block flex direction-column justify-center pt-6">
            <textarea
            name="message"
              rows="4"
              className="w-[50%] bg-transparent placeholder:text-teal-200 text-teal-200 text-sm border border-teal-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-teal-500 hover:border-teal-300"
              type="text"
              placeholder="Enter Your Message"
            />
          </div>
          <div className="block flex direction-column justify-center pt-6">
            <button
            onClick={changetext}
              type="submit"
              class="before:ease relative  h-12 lg:w-80 w-52 rounded-xl overflow-hidden border border-teal-500 bg-teal-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-teal-500 hover:before:-translate-x-40"
            >
              <span relative="relative z-10">{text}</span>
            </button>
            <ToastContainer/>
            <p class="text-base text-center text-gray-500" id="result"></p>
          </div>
          </form>
          <div className="pt-6 ">
            <Footer />
          </div>
         
        </div>
       
      </div>
      <style>{`
    .project{
     animation: fadeIn 3.5s;
    }
    @keyframes fadeIn{
    0%{
  opacity: 0;
  transform:translateY(60px) scale(0.9);
    }
    100%{
      opacity: 1;
      transform:translateY(0px) scale(1);
    }
  }
     `}</style>
    </div>
    
  );
};

export default Contact;
