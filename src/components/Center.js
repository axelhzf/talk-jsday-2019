import React from 'react';

export function Center({ children, style }) {
  return (
    <div
      style={style}
      css={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      {children}
    </div>
  );
}
