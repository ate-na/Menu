import react, { useState } from "react";
import ListMenu from "./ListMenu";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import "../index.css";

const Submenu = ({ depth, data, bool, checked, label }) => {
  depth = depth + 1;
  const [check, setCheck] = useState(false);
  return (
    <ul
      className={`${checked ? `menu-sub-lists` : `menu-sub-list`}${
        check ? `-delete` : ""
      }`}
    >
      {!checked ? (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <button
            className="menu-button"
            style={{ width: "min-content" }}
            onClick={() => setCheck(!check)}
          >
            <ArrowIcon fontSize="small" />
          </button>
          <h4>{label}</h4>
        </div>
      ) : (
        ""
      )}
      {console.log("check", check)}
      {/* <li
          className={checked ? "menu-sub-lists" : "menu-sub-list"}
          style={{ display: bool ? "none" : "flex" }}
        > */}
      {data.map((menu) => {
        return <ListMenu depth={depth} data={menu} hasSubMenu={menu.submenu} />;
      })}
      {/* </li> */}
    </ul>
  );
};

export default Submenu;
