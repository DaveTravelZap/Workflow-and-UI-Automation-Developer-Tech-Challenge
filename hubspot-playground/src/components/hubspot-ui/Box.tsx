import React from 'react';

export interface BoxProps {
  padding?: 'none' | 'small' | 'medium' | 'large';
  margin?: 'none' | 'small' | 'medium' | 'large';
  background?: 'white' | 'grey' | 'orange';
  border?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({
  padding = 'none',
  margin = 'none',
  background,
  border = false,
  style,
  children,
}) => {
  const spaceMap = {
    none: '0',
    small: 'var(--hs-space-2)',
    medium: 'var(--hs-space-4)',
    large: 'var(--hs-space-6)',
  };

  const bgMap = {
    white: 'white',
    grey: 'var(--hs-grey-100)',
    orange: 'var(--hs-orange)',
  };

  const styles: React.CSSProperties = {
    padding: spaceMap[padding],
    margin: spaceMap[margin],
    backgroundColor: background ? bgMap[background] : 'transparent',
    border: border ? '1px solid var(--hs-grey-300)' : 'none',
    borderRadius: 'var(--hs-radius-md)',
    ...style,
  };

  return <div style={styles}>{children}</div>;
};
