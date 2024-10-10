import React from "react";
import { useState } from "react";
window.React = React;



const FORM_ENDPOINT = "https://public.herotofu.com/v1/5382ffc0-0b09-11ef-a597-13fa89ef656d"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually

        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl ml-40">Thank you!</div>
        <div className="text-md ml-40">We will be in touch soon.</div>
      </>
    );
  }

  return (
    <>
      <div className="lg:mt-[200px] mt-36 sm:mt-0 lg:mr-[100px]  mb-5 sm:ml-[200px] sm:mb-[100px] sm:w-inherit   align-center border-zinc-900  flex flex-col items-center justify-center ">
          <h1 className="text-4xl sm:text-5xl mb-[40px] ">Contact Us</h1>
        <form
          className="text-white"
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
        >
          <div className="pt-0 mb-3 py-2 px-20 ml" id="contact">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="focus:outline-none focus:ring relative  w-[300px] sm:w-[700px] align-center px-3 py-3 text-sm placeholder-gray-400 bg-transparent border-2 rounded-xl shadow outline-none bg-gray-600"
              required
            />
          </div>
          <div className="pt-0 mb-3 py-2 px-20 ml">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="focus:outline-none focus:ring relative w-[300px] sm:w-[700px] align-center px-3 py-3 text-sm placeholder-gray-400 bg-transparent border-2 rounded-xl shadow outline-none bg-gray-600"
              required
            />
          </div>
          <div className="pt-0 mb-3 py-2 px-20 ml">
            <textarea
              placeholder="Your Phone No"
              name="phone"
              className="focus:outline-none focus:ring relative overflow-hidden w-[300px] sm:w-[700px] align-center text-sm h-[50px] px-3 py-4 text-sm placeholder-gray-400 bg-transparent border-2 rounded-xl shadow outline-none bg-gray-600"
              required
            />
          </div>
          <div className="pt-0 mb-3 py-2 px-20 ml">
            <textarea
              placeholder="Your Query"
              name="query"
              className="focus:outline-none focus:ring relative w-[300px] sm:w-[700px] align-center h-[200px] px-3 py-3 text-sm placeholder-gray-400 bg-transparent border-2 rounded-xl shadow outline-none bg-gray-600"
              required
            />
          </div>
          <div className="pt-0 mb-3 py-2 px-20 ml">
            <button
              className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-black uppercase transition-all w-[150px] duration-150 ease-linear bg-blue-500 rounded-3xl shadow outline-none"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        </div>
    </>
  );
};


export default ContactForm;