import React from "react";
import s from "./Error404.module.css";

function Error404() {
  return (
    <div className={s.main}>
      <div className={s.mainTitle}>
        404
        <div className={s.mainSubTitle}>Спокойствие, только спокойствие</div>
      </div>
      <div className={s.mainText}>
        Такой странички нет, а это значит, что или ты не туда зашел или я где-то
        накосячил, ставлю на второе =) <br />
        Поэтому возвращайся обратно.
      </div>
      <div className={s.mainPic}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
    </div>
  );
}

export default Error404;
