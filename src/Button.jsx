import { useState } from "react";

export default function Button() {
  const [btnText, setBtnText] = useState("ini button");

  const onClickButton = () => {
    setBtnText('Halo anjay')
  };

  return (
    <button className="p-2 bg-blue-500 border-2 border-blue-800 rounded-sm" onClick={onClickButton}>
      {btnText}
    </button>
  )
}