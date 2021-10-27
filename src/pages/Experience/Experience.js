import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { ExperienceItem, ExperienceTitle, JobTitle } from './styles';

const Experience = ({ gitData }) => {
  return (
    <Layout gitData={gitData}>
      <div>
        <SectionTitle>Experience</SectionTitle>
        <ul>
          {gitData.work.map((work, i) => (
            <ExperienceItem key={i}>
              <ExperienceTitle>{work.position}</ExperienceTitle>
              <div>
                <JobTitle>{work.company}</JobTitle> <span>{work.location}</span>
                <span> &sdot; </span>
                <span>
                  {work.start.year} to {work.end.year}
                </span>
              </div>
              <Paragraph>{work.summary}</Paragraph>
            </ExperienceItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Experience;
