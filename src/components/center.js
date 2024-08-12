import React from 'react';
import shop from '../assets/shop.svg'; // Adjust the path as needed
import spotify from '../assets/spotify.svg'; // Adjust the path as needed
import slack from '../assets/slack.svg'; // Adjust the path as needed

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h4 className="text-2xl font-bold mb-4">Automate your Agent with 5000+ integrations like</h4>
        <div className="flex justify-center space-x-4">
          <img src={shop} alt="Shop" height={40} />
          <img src={spotify} alt="Spotify" height={40} />
          <img src={slack} alt="Slack" height={40} />
        </div>
      </div>
    </section>
  );
};

export default center;
