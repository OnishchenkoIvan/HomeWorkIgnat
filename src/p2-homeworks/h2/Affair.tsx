import React from "react";
import { AffairType } from "./HW2";
import style from "./Affairs.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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
      <SuperButton className={style.btnDelete} onClick={deleteCallback}>
        X
      </SuperButton>
    </div>
  );
}

export default Affair;
