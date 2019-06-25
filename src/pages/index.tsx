import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
// import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';
import { Mail } from 'components/mailchimp/Mail';

import { Header } from 'components/header/Header';
import { Link as HeaderLink } from 'components/header/Link';
import { Footer } from 'components/footer/Footer';

import Logo from 'assets/svg/ueno-logo.svg';
import Dribbble from 'assets/svg/dribbble.svg';
import Twitter from 'assets/svg/twitter.svg';
import Github from 'assets/svg/github.svg';
import Instagram from 'assets/svg/instagram.svg';
import Facebook from 'assets/svg/facebook.svg';
import Linkedin from 'assets/svg/linkedin.svg';

export default () => (
  <>
    <Helmet title="Loops" />
    <Header>
      {/* <HeaderLink
        name="about"
        to="/about"
      />

      <HeaderLink
        name="github"
        to="https://github.com/ueno-llc"
        icon={<Github />}
      /> */}
    </Header>
    <Intro>
    We build ROI driven campaigns that grow your business. Whether it’s Facebook, Instagram, Google, Social Video Marketing, Email Marketing, User Generated Content. We help you find, pick and implement the most impactful strategies that drive revenue. </Intro>
    <Mail />
    <BlockText
      heading="Who we are"
      description={(
        <>
          Dedicated Digital Marketing Agency for Travel & Hospitality Industry. 
In the past 7 years, we have been honored to work with amazing companies like Surkus.com, thefabulous.co, Metalab.co and many others. We delivered campaigns with over 5 ROAS optimizing and testing each stage of the funnel and user interaction. 

        </>
      )}
    />

<Footer
      logo={<Logo />}
      social={[
        { icon: <Dribbble />, to: 'https://dribbble.com/ueno' },
        { icon: <Twitter />, to: 'https://twitter.com/uenodotco' },
        { icon: <Github />, to: 'https://github.com/ueno-llc' },
        { icon: <Instagram />, to: 'https://www.instagram.com/uenodotco' },
        { icon: <Facebook />, to: 'https://www.facebook.com/uenodotco' },
        { icon: <Linkedin />, to: 'https://www.linkedin.com/company/ueno' },
      ]}
    />
  </>
);
