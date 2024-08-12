import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';
import power from '../assets/bolt-solid.svg';
import hand from '../assets/hand-solid.svg';
import brain from '../assets/brain-solid.svg';
import key from '../assets/key-solid.svg';
import arrow from '../assets/bars-solid.svg';

const FeaturesSlider = () => {
  const featuresList = [
    {
      icon: power,
      title: 'Ultra-Fast Response',
      description: 'Experience lightning-quick interactions with an impressive 500 ms response time, ensuring seamless conversations.'
    },
    {
      icon: hand,
      title: 'Smart Interruption Management',
      description: 'Our system adeptly handles interruptions, ensuring smooth, natural dialogues just like human conversations.'
    },
    {
      icon: brain,
      title: 'Advanced Memory Recall',
      description: 'Remembering context and details from earlier in the conversation, our AI provides a personalized and coherent interaction.'
    },
    {
      icon: 'icons/dynamic-conversational-flows.png', // Assuming this is the correct path to your icon
      title: 'Dynamic Conversational Flows',
      description: 'Navigate through complex conversations with ease, thanks to our AI\'s ability to understand and adapt to various conversational pathways.'
    },
    {
      icon: key,
      title: 'Custom AI Solutions',
      description: 'Leverage our proprietary AI models tailored to your specific business needs for unparalleled efficiency and effectiveness.'
    },
    {
      icon: arrow,
      title: 'Scalability at Your Fingertips',
      description: 'From one-on-one conversations to managing 10,000 concurrent calls, our platform scales effortlessly with your business.'
    }
  ];

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="features" className="py-20 bg-orange-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Features</h2>
        <div className={isMobile ? 'px-4' : 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'}>
          {isMobile ? (
            <Slider {...settings}>
              {featuresList.map((feature, index) => (
                <div key={index} className="px-2">
                  <div className="bg-orange-200 p-4 rounded-lg shadow-lg">
                    <img src={feature.icon} height={10} alt="Feature Icon" className="mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
                    <p className="text-gray-700 text-sm mb-4 text-center">{feature.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            featuresList.map((feature, index) => (
              <div key={index} className="bg-orange-200 p-4 rounded-lg shadow-lg">
                <img src={feature.icon} height={20} width={40} alt="Feature Icon" className="mx-auto mb-4" />
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

export default FeaturesSlider;
