import React from "react";

const PrevTrack = props => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 16 16"
    style={{ enableBackground: "new 0 0 16 16" }}
    {...props}
  >
    <path d="M14,15V1L4,8L14,15z"/>
    <path d="M4,15H2V1h2V15z"/>
  </svg>
);

export default PrevTrack;
