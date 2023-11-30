import React from "react";
import Status from "./Status";

const Hero = ({ user, handleToDoDelete, handleEdit, handleStatusChange }) => {
  const handleEditClick = (e) => {
    e.preventDefault();
    handleEdit();
  };

  return (
    <div className="col-xl-4 md-6 sm-12">
      <div
        className="card p-3 m-2" style={{backgroundColor: '#ccf5d3', border: '0', textAlign: "left"}}
      >
        
        <div>Title :{user.name}</div>
            <div>Description :{user.desc}</div>
          <div >
            Status : 
           <Status handleStatusChange={handleStatusChange}  user={user}/>
          </div>
          <div className="text-end mt-4">
            <button
              className="btn btn-primary me-4 px-4"
              onClick={handleEditClick}
              style={{
                backgroundColor: "#13ad89",
                color: "white",
                border: "0",
              }}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn px-3"
              onClick={handleToDoDelete}
              style={{
                backgroundColor: "#cf5f1d",
                color: "white",
                border: "0",
              }}
            >
              Delete
            </button>
          </div>
     
      </div>
    </div>
  );
};

export default Hero;
