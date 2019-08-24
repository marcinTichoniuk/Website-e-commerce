import React from 'react';
import gif from '../img/gif/loading-arrow.gif';

const Loading = () => {
  return (
    <div className="loading">
      <h3 className="loading__title">Waiting for data...</h3>
      <div className="loading__img-container">
        <img src={gif} alt="" className="loading__gif" />
      </div>
    </div>
  );
}

export default Loading;