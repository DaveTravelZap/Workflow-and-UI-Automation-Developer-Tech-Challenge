import React from 'react';

export interface BadgeProps {
  variant?: 'info' | 'success' | 'warning' | 'danger' | 'grey';
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'info',
  style,
  children,
}) => {
  const bgMap = {
    info: 'var(--hs-info)',
    success: 'var(--hs-success)',
    warning: 'var(--hs-warning)',
    danger: 'var(--hs-danger)',
    grey: 'var(--hs-grey-500)',
  };

  const styles: React.CSSProperties = {
    display: 'inline-flex',
    padding: '2px 8px',
    borderRadius: '10px',
    backgroundColor: bgMap[variant],
    color: 'white',
    fontSize: '11px',
    fontWeight: 600,
    fontFamily: 'var(--hs-font-family)',
    textTransform: 'uppercase',
    ...style,
  };

  return <span style={styles}>{children}</span>;
};
