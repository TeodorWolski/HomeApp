import React from 'react';
import Button from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
};

export const Primary = () => <Button> Close / Save </Button>;
export const Secondary = () => <Button secondary> Remove </Button>;
