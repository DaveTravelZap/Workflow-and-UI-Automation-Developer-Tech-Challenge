import React from 'react';
import './Alert.css';

export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  style,
  children,
}) => {
  return (
    <div className={`hs-alert hs-alert--${variant}`} style={style}>
      {title && <div className="hs-alert-title">{title}</div>}
      <div className="hs-alert-content">{children}</div>
    </div>
  );
};
