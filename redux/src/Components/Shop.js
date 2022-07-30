import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators } from "../State";
import { bindActionCreators } from "redux";

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.amount);
  const { withdrawMoney, depositMoney } = bindActionCreators(
    ActionCreators,
    dispatch
  );
  return (
    <div>
      <h2>Deposit/withdraw Money</h2>
      <button
        className="btn btn-outline-success mx-2"
        onClick={() => {
          withdrawMoney(100);
        }}
      >
        <h5>-</h5>
      </button>
      Update Balance ({balance})
      <button
        className="btn btn-outline-success mx-2"
        onClick={() => {
          depositMoney(100);
        }}
      >
        <h5>+</h5>
      </button>
    </div>
  );
};

export default Shop;
