import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import instagram from '../assets/instagram.svg';
import discord from '../assets/discord.svg';
import linkedin from '../assets/linkedin.svg';
import youtube from '../assets/youtube.svg';

// Styled components using twin.macro and styled-components
const FooterContainer = styled.footer`
  ${tw`bg-gray-800 text-white py-8 px-4`}
`;

const FooterContent = styled.div`
  ${tw`text-center mb-4`}
`;

const FooterHeading = styled.h1`
  ${tw`text-2xl font-bold mb-2`}
`;

const FooterText = styled.p`
  ${tw`mb-4`}
`;

const FooterLinks = styled.div`
  ${tw`flex flex-wrap justify-center gap-4 mb-4`}
`;

const FooterLink = styled.a`
  ${tw`text-white hover:text-gray-400`}
`;

const CopyrightText = styled.p`
  ${tw`text-sm`}
`;

const SocialIcons = styled.div`
  ${tw`flex justify-center gap-4`}
`;

const SocialIconLink = styled.a`
  ${tw`inline-block`}
`;

const SocialIconImage = styled.img`
  ${tw`w-6 h-6`}
`;

// Footer component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterHeading>TOINGG</FooterHeading>
        <FooterText>
          We are here to grow your business <span role="img" aria-label="heart">❤️</span>
        </FooterText>
        <FooterLinks>
          <FooterLink href="#">Terms and conditions</FooterLink>
          <FooterLink href="#">Privacy policy</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
          <FooterLink href="#">API docs</FooterLink>
          <FooterLink href="#">Refund Policy</FooterLink>
        </FooterLinks>
        <CopyrightText>
          Copyright © 2024 Toingg, All rights reserved.
        </CopyrightText>
      </FooterContent>
      <SocialIcons>
        <SocialIconLink href="#">
          <SocialIconImage src={instagram} alt="Instagram" />
        </SocialIconLink>
        <SocialIconLink href="#">
          <SocialIconImage src={discord} alt="Discord" />
        </SocialIconLink>
        <SocialIconLink href="#">
          <SocialIconImage src={linkedin} alt="LinkedIn" />
        </SocialIconLink>
        <SocialIconLink href="#">
          <SocialIconImage src={youtube} alt="YouTube" />
        </SocialIconLink>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
