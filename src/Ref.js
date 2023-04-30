import React, { useRef } from "react";

function Ref() {
  const inputRef = useRef();
  const videoRef = useRef();
  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  const handleSubmitVideo = () => {
    console.log(videoRef);
  };

  return (
    <div>
      <h1>Ref Example</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>getValue</button>
      <button onClick={handleSubmitVideo}>
        <video src="" controls ref={videoRef}>
          video
        </video>
      </button>
    </div>
  );
}

export default Ref;
