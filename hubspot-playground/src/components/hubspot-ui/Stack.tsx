import React from 'react';
import { Flex } from './Flex';
import type { FlexProps } from './Flex';

export interface StackProps extends Omit<FlexProps, 'direction'> {}

export const Stack: React.FC<StackProps> = (props) => {
  return <Flex {...props} direction="column" />;
};
