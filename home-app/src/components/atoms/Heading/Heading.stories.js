import React from 'react';
import Heading from './Heading';

export default {
  title: 'atoms/Heading',
  component: Heading,
};

export const Classic = () => <Heading> Pozdro </Heading>;
export const Big = () => <Heading big> Remove </Heading>;
