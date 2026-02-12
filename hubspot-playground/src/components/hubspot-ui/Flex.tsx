import React from 'react';

export interface FlexProps {
  direction?: 'row' | 'column';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  gap?: 'none' | 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const Flex: React.FC<FlexProps> = ({
  direction = 'row',
  align = 'stretch',
  justify = 'start',
  gap = 'none',
  style,
  children,
}) => {
  const gapMap = {
    none: '0',
    small: 'var(--hs-space-2)',
    medium: 'var(--hs-space-4)',
    large: 'var(--hs-space-6)',
  };

  const justifyMap = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
  };

  const alignMap = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    stretch: 'stretch',
  };

  const styles: React.CSSProperties = {
    display: 'flex',
    flexDirection: direction,
    alignItems: alignMap[align],
    justifyContent: justifyMap[justify],
    gap: gapMap[gap],
    ...style,
  };

  return <div style={styles}>{children}</div>;
};
