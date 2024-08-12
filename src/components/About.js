import React from 'react';
import phoneIcon from '../assets/phone-solid.svg';
import spotify from '../assets/salesforce.svg';
import slack from '../assets/shopify.svg'
import shop from '../assets/slack.svg'

const MainComponent = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="left-section text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold">
            Build AI Calling Agent that can do
            <br />
            <strong>Property Listing Handling</strong>
          </h1>
          <div className="buttons mt-6">
            <button className="orange-button bg-orange-500 text-white py-2 px-4 rounded mr-4 hover:bg-orange-600">
              Build your own voice agent
            </button>
            <button className="white-button bg-white text-gray-800 py-2 px-4 rounded border border-gray-800 hover:bg-gray-100">
              Hear it in Action
            </button>
          </div>
        </div>

        <div className="right-section bg-orange-100 p-6 rounded-lg shadow-lg w-full md:w-auto md:flex-1">
      <h2 className="text-2xl font-bold mb-4">Try now</h2>
      <p className="mb-4">Get a call from Toingg</p>
      <form>
        <input
          type="text"
          placeholder="Name"
          className="mb-4 p-2 w-full border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Phone"
          className="mb-4 p-2 w-full border border-gray-300 rounded"
        />
        <select className="mb-4 p-2 w-full border border-gray-300 rounded">
          <option>Choose your language</option>
          <option>English</option>
          <option>Hindi</option>
        </select>
        <button
          type="submit"
          className="call-button bg-blue-500 text-white py-2 px-4 rounded flex items-center justify-center hover:bg-blue-600"
        >
          <img src={phoneIcon} alt="Call" className="w-6 h-6 rounded-full mr-2" />
          Call Now
        </button>
      </form>
    </div>
      </div>

      <About />
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
    <div className="container mx-auto text-center">
      <h4 className="text-2xl font-bold mb-4">Automate your Agent with 5000+ integrations like</h4>
      <div className="flex justify-center space-x-4">
      <img src={shop} alt="Shop" className="h-10 w-10 filter blur-2" />
          <img src={spotify} alt="Spotify" className="h-10 w-10 filter blur-2" />
          <img src={slack} alt="Slack" className="h-10 w-10 filter blur-2" />
      </div>
    </div>
  </section>
  );
};

export default MainComponent;
