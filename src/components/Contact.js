// src/components/Contact.js

import React, { useRef } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dz03o2m', 'contact_form', form.current, 'user_6nSZeKtgq6XdR3AX8fsxk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }, alert("Message sent!"));
    };
    

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=New+York,+NY+10018,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                I'm an NYC-based, freelance software developer.
                            </h2>
                            <p className="mt-1">
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                E-MAIL
                            </h2>
                            <a href="/" className="text-indigo-400 leading-relaxed">
                                raymond@rmrtech.net
                            </a>
                            
                        </div>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Hire Me
                    </h2>
                    <p className="leading-relaxed mb-5">
                        Let's discuss solving your business problems ~ there's always a solution.
                    </p>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="text"
                            name="user_email"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
