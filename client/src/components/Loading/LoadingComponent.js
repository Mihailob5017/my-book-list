import React from 'react';

const LoadingComponent = () => {
  return (
    <div className="container row ">
      <div className="col-3">
        <div
          className="col-3 flow-center spinner-grow text-success"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className="col-3">
        <div className=" spinner-grow flow-center text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className="col-3">
        <div className=" spinner-grow flow-center text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className="col-3">
        <div className=" spinner-grow flow-center text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
