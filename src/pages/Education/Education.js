import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { EducationItem, Institution, Degree } from './styles';

const Education = ({ gitData }) => {
  return (
    <Layout gitData={gitData}>
      <div>
        <SectionTitle>Education</SectionTitle>
        <ul>
          {gitData.education.map((education, i) => (
            <EducationItem key={i}>
              <Institution>{education.position}</Institution>
              <div>
                <Degree>
                  {education.studyType}, {education.area}
                </Degree>{' '}
                <span> &sdot; </span>
                <span>
                  {education.start.year} to {education.end.year}
                </span>
              </div>
              <Paragraph>{education.description.replace('\n\n', '\n')}</Paragraph>
            </EducationItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Education;
