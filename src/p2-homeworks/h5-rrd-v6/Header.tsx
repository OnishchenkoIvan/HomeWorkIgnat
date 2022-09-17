import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "./Pages";
import s from "./Header.module.css";

function Header() {
  return (
    <div className={s.main}>
      <NavLink
        to={PATH.PRE_JUNIOR}
        className={({ isActive }) =>
          isActive ? `${s.link} ${s.active}` : s.link
        }
      >
        Prejunior
      </NavLink>
      <NavLink
        to={PATH.JUNIOR}
        className={({ isActive }) =>
          isActive ? `${s.link} ${s.active}` : s.link
        }
      >
        Junior
      </NavLink>
      <NavLink
        to={PATH.JUNIORPLUS}
        className={({ isActive }) =>
          isActive ? `${s.link} ${s.active}` : s.link
        }
      >
        JuniorPlus
      </NavLink>
      <NavLink
        to={PATH.MISTAKE}
        className={({ isActive }) =>
          isActive ? `${s.link} ${s.active}` : s.link
        }
      >
        404
      </NavLink>
      <div className={s.block} />
    </div>
  );
}

export default Header;
