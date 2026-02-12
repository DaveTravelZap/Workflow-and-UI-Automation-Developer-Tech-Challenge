import React from 'react';
import './ProgressBar.css';

export interface ProgressBarProps {
  value: number;
  max?: number;
  variant?: 'info' | 'success' | 'warning' | 'danger';
  label?: string;
  showPercentage?: boolean;
  style?: React.CSSProperties;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  variant = 'info',
  label,
  showPercentage = false,
  style,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className="hs-progress-container" style={style}>
      {(label || showPercentage) && (
        <div className="hs-progress-label-container">
          {label && <span className="hs-progress-label">{label}</span>}
          {showPercentage && <span className="hs-progress-percentage">{Math.round(percentage)}%</span>}
        </div>
      )}
      <div className="hs-progress-track">
        <div
          className={`hs-progress-bar hs-progress-bar--${variant}`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
};
