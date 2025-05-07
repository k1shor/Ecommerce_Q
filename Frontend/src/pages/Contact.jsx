import React from "react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-neutral">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">
               Our Store
            </h2>
            <p className="ml-2 text-gray-600 leading-relaxed">
              97 (LP#85) Calcutta Settlement Road #1,
              <br />
              Freeport, Carapichaima 530737, Trinidad and Tobago.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">
               Email Address
            </h2>
            <p className="ml-2 text-gray-600">info@qpsl.com</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">
              Find us on Social Media:
            </h2>
            <div className="ml-2 space-y-4">
              <div>
                <p className="font-semibold">QPSL:</p>
                <div className="flex gap-4 text-2xl text-black mt-1">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-whatsapp"></i>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-tiktok"></i>
                </div>
              </div>
              <div>
                <p className="font-semibold">Trinidad Koi:</p>
                <div className="flex gap-4 text-2xl text-black mt-1">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-whatsapp"></i>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-tiktok"></i>
                  <i className="bi bi-twitter-x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white shadow-2xl p-8 rounded-2xl border border-base-200">
          <h2 className="text-3xl font-bold mb-3 text-neutral">
            Send us a message
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Let us encourage your users to fill in the contact form below. Here,
            you can list the various reasons they can contact you for.
          </p>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered w-full h-32"
            ></textarea>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="text-sm text-gray-600">I am human</span>
            </div>
            <button className="btn btn-warning text-white w-full uppercase font-bold tracking-wider">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Phone and Hours Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center bg-gray-100 p-10 rounded-xl">
        <div>
          <i className="bi bi-telephone-fill text-4xl text-primary mb-2"></i>
          <h3 className="text-2xl font-bold">Phone</h3>
          <hr className="w-16 border-t-2 border-primary mx-auto my-2" />
          <p className="text-gray-700 font-semibold">Office number:</p>
          <p>1 (868) 673-5000</p>
          <p className="text-gray-700 font-semibold mt-2">QPSL Sales:</p>
          <p>1 (868) 384-9022, 1 (868) 280-6002</p>
          <p className="text-gray-700 font-semibold mt-2">Trinidad Koi:</p>
          <p>1 (868) 339-8199, 1 (868) 280-5000</p>
        </div>

        <div>
          <i className="bi bi-clock-fill text-4xl text-primary mb-2"></i>
          <h3 className="text-2xl font-bold">Business Hours</h3>
          <hr className="w-32 border-t-2 border-primary mx-auto my-2" />
          <ul className="text-gray-700 space-y-1">
            <li>Monday: 7:00 a.m. to 3:35 p.m.</li>
            <li>Tuesday: 7:00 a.m. to 3:35 p.m.</li>
            <li>Wednesday: 7:00 a.m. to 3:35 p.m.</li>
            <li>Thursday: 7:00 a.m. to 3:35 p.m.</li>
            <li>Friday: 7:00 a.m. to 3:35 p.m.</li>
            <li>Saturday: Closed</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      {/* Embedded Map */}
      <div className="mt-12">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3550.772533717802!2d-61.411349!3d10.442878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c35f73032cc0aad%3A0xc8baecfe648e39aa!2sQPS%20Ltd!5e1!3m2!1sen!2stt!4v1746255997984!5m2!1sen!2stt"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-xl border border-base-300"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
