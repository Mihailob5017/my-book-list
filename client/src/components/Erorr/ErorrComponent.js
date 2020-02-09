import React from 'react';
import ErorrModal from './ErorrModal';

const ErorrComponent = props => {
  return (
    <>
      <div className="jumbotron">
        <div className="display-3 text-center text-danger">
          Opps!Something Went Wrong
        </div>
        <div className="container">
          <button
            type="button"
            className="btn container btn-outline-danger my-5 btn-block"
            data-toggle="modal"
            data-target="#exampleModalLong"
          >
            View Error
          </button>
        </div>
      </div>
      <ErorrModal msg={props.error} />
    </>
  );
};

export default ErorrComponent;
