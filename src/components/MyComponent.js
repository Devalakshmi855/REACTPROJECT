import React from 'react';
import chatgpt from '../assets/api-prompt-library.gif'; // Import your image asset

const MyComponent = () => {
  return (
    <div className="container mx-auto">
      {/* Container for YouTube video */}
      <div className="my-8">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/_La3wQlntgw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Main section with content */}
      <div className="bg-orange-100 py-6 px-4 flex flex-col md:flex-row items-center">
        <div className="max-w-2xl md:mr-4">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold">Explore TOINGG in GPT store</h1>
            <h2 className="text-xl font-bold mt-4">GPT store</h2>
          </div>
          <ul className="mt-4">
            <li className="mb-2">
              <strong>.</strong> Interactive Communication: Engage in single or batch calls using TOINGG GPT.
            </li>
            <li className="mb-2">
              <strong>.</strong> Advanced Features: Leverage GPT for real-time sentiment analysis during calls.
            </li>
            <li className="mb-2">
              <strong>.</strong> Data Export: Conveniently export call logs to CSV.
            </li>
            <li className="mb-2">
              <strong>.</strong> Enhanced Usability: Tailored for users familiar with CSV functionalities.
            </li>
          </ul>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Explore more</button>
        </div>
        <div className="mt-6 md:mt-0 md:ml-4 flex justify-center">
          <img src={chatgpt} alt="ChatGPT" className="h-48 md:h-72" />
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
