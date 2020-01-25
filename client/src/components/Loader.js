import React from 'react';

export const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        paddingTop: '2rem',
        justifyContent: 'center'
      }}
    >
      <div className="preloader-wrapper active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
