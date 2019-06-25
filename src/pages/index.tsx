import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
// import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';
import { Mail } from 'components/mailchimp/Mail';

export default () => (
  <>
    <Helmet title="Loops" />

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
  </>
);
