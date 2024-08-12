// Import necessary dependencies
import React from 'react';
import tw from 'twin.macro'; // Import tw from twin.macro for styling
import styled from 'styled-components'; // Import styled from styled-components

// Styled components using tw and styled
const FaqContainer = styled.div`
  ${tw`bg-white py-10 px-4 md:px-10`}
`;

const Faq = styled.div`
  ${tw`mb-4`}
`;

const FaqQuestion = styled.div`
  ${tw`flex justify-between items-center cursor-pointer`}
`;

const FaqAnswer = styled.div`
  ${tw`hidden`}
`;

// Toggle function for FAQ answer visibility
const toggleAnswer = (question) => {
  question.nextSibling.classList.toggle('hidden');
};

// Define the FAQ component
const Contact = () => {
  return (
    <FaqContainer>
      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <Faq>
        <FaqQuestion onClick={(e) => toggleAnswer(e.currentTarget)}>
          <span>What is Toingg?</span>
          <span>+</span>
        </FaqQuestion>
        <FaqAnswer>
          <p>Toingg is an innovative platform designed to streamline your workflow and increase productivity.</p>
        </FaqAnswer>
      </Faq>
      <Faq>
        <FaqQuestion onClick={(e) => toggleAnswer(e.currentTarget)}>
          <span>Why is Toingg better than others?</span>
          <span>+</span>
        </FaqQuestion>
        <FaqAnswer>
          <p>Toingg offers unique features and a user-friendly interface that sets it apart from the competition.</p>
        </FaqAnswer>
      </Faq>
      <Faq>
        <FaqQuestion onClick={(e) => toggleAnswer(e.currentTarget)}>
          <span>Does Toingg support your existing database?</span>
          <span>+</span>
        </FaqQuestion>
        <FaqAnswer>
          <p>Yes, Toingg seamlessly integrates with your existing database systems.</p>
        </FaqAnswer>
      </Faq>
      <Faq>
        <FaqQuestion onClick={(e) => toggleAnswer(e.currentTarget)}>
          <span>How does Toingg ensure security?</span>
          <span>+</span>
        </FaqQuestion>
        <FaqAnswer>
          <p>Toingg employs advanced security measures to protect your data and ensure privacy.</p>
        </FaqAnswer>
      </Faq>
    </FaqContainer>
  );
};

export default Contact;
