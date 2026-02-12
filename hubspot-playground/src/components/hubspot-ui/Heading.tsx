import React from 'react';

export interface HeadingProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  variant = 'h1',
  style,
  children,
}) => {
  const Tag = variant as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  const styles: React.CSSProperties = {
    color: 'var(--hs-charcoal)',
    margin: '0 0 var(--hs-space-2) 0',
    fontWeight: 600,
    fontFamily: 'var(--hs-font-family)',
    ...style,
  };

  return <Tag style={styles}>{children}</Tag>;
};
