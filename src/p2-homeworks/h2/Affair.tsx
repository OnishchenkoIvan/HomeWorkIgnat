import React from "react";
import { AffairType } from "./HW2";
import style from "./Affairs.module.css";

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType; // need to fix any
  deleteAffairCallback: (_id: number) => void;
};

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id);
  }; // need to fix

  return (
    <div className={style.main}>
      <span className={style.hundred}>{props.affair.name}</span>
      <span className={style.span}>[{props.affair.priority}]</span>
      <button className={style.btnDelete} onClick={deleteCallback}>
        X
      </button>
    </div>
  );
}

export default Affair;
