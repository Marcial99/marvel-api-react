import React from "react";

const Error = ({ children }) => {
  return (
    <div className=" my-2 block uppercase bg-red-600 text-white font-bold text-sm p-2 ">
      {children}
    </div>
  );
};

export default Error;
