import React from 'react';
import styles from './divider.module.scss';

interface DividerProps {
  width?: string;
  height?: string;
  color?: string;
  margin?: string;
}

const DividerComponent: React.FC<DividerProps> = ({ width, height, color, margin }) => {
  return (
    <div
      className={styles.divider}
      style={{
        width: width || '100%',
        height: height || '1px',
        backgroundColor: color || '#000',
        margin: margin || '10px 0',
      }}
    />
  );
};

export default DividerComponent;
