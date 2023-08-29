import { useState } from "react";
import { BoxLogin } from "../component/boxLogin";
export const Home = () => {
  const [show, setshow] = useState(false);
  const handel = () => {
    setshow(true);
  };
  return (
    <div>
      {show && <BoxLogin />}
      <p>This page Home</p>
      <button onClick={handel}>Login</button>
    </div>
  );
};
