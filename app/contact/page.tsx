import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="max-container padding-container flex flex-col gap-16 py-12">
      {/* Header Section */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-purple-600">Get in Touch with Us</h1>
        <p className="mt-4 text-lg text-gray-500">We're here to help you plan your perfect journey</p>
      </header>
      
      {/* Contact Form */}
      <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-center max-w-4xl mx-auto w-full">
        <div className="hidden lg:block w-1/2 pr-8">
          <Image src="/beach2.jpg" alt="Contact Us" width={400} height={400} className="rounded-lg" />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text_pink text-2xl font-semibold text-center lg:text-left">Contact Us</h2>
          <form className="mt-6 flex flex-col gap-4">
            <input type="text" placeholder="Name" className="p-3 border border-gray-300 rounded-md w-full" />
            <input type="email" placeholder="Email" className="p-3 border border-gray-300 rounded-md w-full" />
            <select className="p-3 border border-gray-300 rounded-md w-full">
              <option>Inquiry</option>
              <option>Booking Help</option>
              <option>Others</option>
            </select>
            <textarea placeholder="Message" className="p-3 border border-gray-300 rounded-md w-full"></textarea>
            <button type="submit" className="px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 w-full">Submit</button>
          </form>
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Our Office</h2>
        <p className="mt-2 text-lg text-gray-500">123 Travel Street, Wanderland, Email: contact@travlog.com, Phone: +123 456 7890</p>
      </section>
    </div>
  );
};

export default Contact;