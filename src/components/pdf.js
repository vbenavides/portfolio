import React from 'react';
import '../styles/pdf.css';

const pdf = () => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    >
      <object
        data={require('../content/resume.pdf').default}
        type='application/pdf'
        width='100%'
        height='100%'
        aria-label='resume'
      ></object>
    </div>
  );
};

export default pdf;
