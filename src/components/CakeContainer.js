import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}
const mapStoreToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStoreToProps, mapDispatchToProps)(CakeContainer);
