import React from 'react';
import shield from '../assets/shield-solid.svg';
import logo from '../assets/phone-solid.svg';
import filter from '../assets/filter-solid.svg';
import weight from '../assets/scale-unbalanced-flip-solid.svg';
import file from '../assets/file-solid.svg';

const SecurityFeatures = () => {
  return (
    <div className="bg-orange-100 py-10 px-6 md:px-0">
      <div className="container flex flex-wrap">
        {/* Left Div */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:flex-row md:justify-start mb-6 md:mb-12 text-center md:text-left">
          <img src={shield} height={20} width={40} alt="Shield Icon" className="mb-4 md:mb-0 md:mr-8" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Unwavering Safety & Security</h1>
            <p className="text-gray-700 leading-relaxed">
              With robust internal audits and stringent data governance, we champion the ethical use of AI, ensuring technology serves humanity's best interests. Our commitment sets the foundation for Advanced General Intelligence (AGI) with integrity.
            </p>
          </div>
        </div>
        {/* Right Div */}
        <div className="w-full md:w-1/2 flex flex-wrap justify-center md:justify-start">
          <div className="w-1/2 flex items-center text-center md:text-left mb-4">
            <img src={logo} height={20} width={20} alt="Logo Icon" className="mr-2" />
            <span>Call Monitoring</span>
          </div>
          <div className="w-1/2 flex items-center text-center md:text-left mb-4">
            <img src={filter} height={20} width={20} alt="Filter Icon" className="mr-2" />
            <span>Prompt Injection</span>
          </div>
          <div className="w-1/2 flex items-center text-center md:text-left mb-4">
            <img src={weight} height={20} width={20} alt="Weight Icon" className="mr-2" />
            <span>Rate Limits</span>
          </div>
          <div className="w-1/2 flex items-center text-center md:text-left">
            <img src={file} height={20} width={20} alt="File Icon" className="mr-2" />
            <span>Internal Hard Audits</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityFeatures;
