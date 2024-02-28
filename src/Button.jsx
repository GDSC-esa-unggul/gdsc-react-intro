import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Button(props) {
  const [onCLicked, setOnCliked] = useState(false);

  return (
    <>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded `}
        onClick={() => setOnCliked(true)}
      >
        {props.children}
        {
          onCLicked === true && <span>Clicked</span>
        }
      </button>
    </>
  );
}