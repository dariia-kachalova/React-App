import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { infoData } from '../../data/dataStore';

const Info = () => {
  const {image, content, title} = infoData;
  console.log(infoData);
  return (
    <Container>
      <Hero background={image} titleText={title} />
      <p>{content}</p>
    </Container>
  );
};

Info.propTypes = {
  content: PropTypes.node,
  image: PropTypes.string,
  title: PropTypes.node,
};

export default Info;