import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';
import menu from '../assets/menu-01.png';
import settings from '../assets/screwdriver-wrench-solid.svg';
import volume from '../assets/volume-high-solid.svg';

const ThreeColumnFeatures = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const featuresList = [
    {
      icon: menu,
      title: 'Fine Tuning',
      description: 'Elevate Your Agent Interactions With Our Fine-tuning Technique, Not only LLM weights but Prompts and parameters too.'
    },
    {
      icon: settings,
      title: 'Custom Tools',
      description: 'Enhanced Agent Capabilities: Instantly access customer history, integrate databases, and connect to APIs during calls. Simplify tasks like scheduling and data handling, all while leveraging past call insights for smarter interactions.'
    },
    {
      icon: volume,
      title: 'Dedicated Infrastructure',
      description: 'Experience unmatched scalability and reliability with our dedicated Kubernetes clusters, designed for high availability to support up to 10,000 concurrent calls. Enjoy exclusive server access, bypassing standard rate limits, complemented by our 24/7 expert support.'
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <section id="features" className="py-20 bg-orange-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Features</h2>
        <div className={isMobile ? 'px-4' : 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'}>
          {isMobile ? (
            <Slider {...sliderSettings}>
              {featuresList.map((feature, index) => (
                <div key={index} className="px-2">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <img src={feature.icon} height={40} alt="Feature Icon" className="mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
                    <p className="text-gray-700 text-sm mb-4 text-center">{feature.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            featuresList.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <img src={feature.icon} height={40} width={40} alt="Feature Icon" className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-700 text-sm mb-4 text-center">{feature.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnFeatures;
