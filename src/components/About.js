import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutSection>
      <AboutImage src="\images\MaryCeleste.jpg" alt="Photographer" />
      <AboutText>
        <h1>About Mary Celeste</h1>
        <p>
        After retiring from her career as an educator, Mary has embarked on extensive world travel to epic locations to capture magnificent beauty. Mary has won awards for her art and been included in a private gallery presentation in downtown Chicago. Her images have been published by different groups in various online documents.
        </p>
        <p>
        Mary enjoys her children, grandchildren, hiking, the outdoors, and Rosemaling. As a Christian, she endeavors to create a composition which reflects God’s glorious design.  Then take it home in her pocket to share the spectacular landscapes and impressive wildlife.
        </p>
      </AboutText>
    </AboutSection>
  );
};

const AboutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  flex-wrap: wrap; /* Enables wrapping for small screens */
  margin-top: 2rem; /* Adds space below the navbar */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack vertically on smaller screens */
    padding: 2rem; /* Reduce padding on smaller screens */
  }
`;

const AboutImage = styled.img`
  width: 350px; /* Increased size for larger appearance */
  height: auto;
  border-radius: 50%;
  margin-right: 2rem;

  @media (max-width: 768px) {
    width: 200px; /* Adjust image size for smaller screens */
    margin-right: 0; /* Remove right margin */
    margin-bottom: 1.5rem; /* Add bottom margin for spacing */
  }

  @media (max-width: 480px) {
    width: 200px; /* Further adjust image size for extra small screens */
  }
`;

const AboutText = styled.div`
  max-width: 600px;
  text-align: center; /* Center text for smaller screens */

  h1 {
    margin-bottom: 1rem;
    font-size: 1.5rem; /* Adjust font size for smaller screens */
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
    font-size: 1rem; /* Adjust font size for smaller screens */
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.25rem; /* Adjust heading size for tablets */
    }

    p {
      font-size: 0.9rem; /* Adjust paragraph font size for tablets */
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1rem; /* Further adjust heading size for phones */
    }

    p {
      font-size: 0.85rem; /* Further adjust paragraph font size for phones */
    }
  }
`;

export default About;
