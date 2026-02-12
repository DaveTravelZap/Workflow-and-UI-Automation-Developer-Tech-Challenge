import React from 'react';

export interface TextProps {
  variant?: 'body' | 'caption' | 'micro';
  color?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  color,
  style,
  children,
}) => {
  const styles: React.CSSProperties = {
    color: color || 'var(--hs-slate)',
    fontSize: variant === 'caption' ? '12px' : variant === 'micro' ? '10px' : '14px',
    margin: '0',
    fontFamily: 'var(--hs-font-family)',
    lineHeight: '1.5',
    ...style,
  };

  return <p style={styles}>{children}</p>;
};
