import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";
function HooksCakeContainer() {
  const numOfCake = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of Cakes - {numOfCake}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cakes</button>
    </div>
  );
}

export default HooksCakeContainer;
