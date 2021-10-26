import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';

const About = ({ gitData }) => {
  return (
    <Layout gitData={gitData}>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>{gitData.basics.summary}</Paragraph>
      </div>
    </Layout>
  );
};

export default About;
