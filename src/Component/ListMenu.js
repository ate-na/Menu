import react, { useEffect, useState } from "react";
import Submenu from "./Submenu";
import "../index.css";
const ListMenu = ({ shortcut, depth, data, hasSubMenu, checked, disabled }) => {
  const [bool, Setbool] = useState(false);
  const [bool2, Setbool2] = useState(false);

  return (
    <>
      <div className="menu-item">
        {disabled ? (
          <button
            className="menu-button menu-button--black"
            onClick={() => Setbool(!bool)}
            disabled
          >
            <span style={{ textAlign: "center", fontSize: "0.7rem" }}>
              {data.label}
            </span>
            <span style={{ fontSize: "0.7rem" }}>{shortcut}</span>
            {hasSubMenu && hasSubMenu.length !== 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            ) : (
              ""
            )}
          </button>
        ) : (
          <button
            className="menu-button menu-button--black"
            onClick={() => Setbool(!bool)}
          >
            <span style={{ textAlign: "center", fontSize: "0.7rem" }}>
              {data.label}
            </span>
            <span style={{ fontSize: "0.7rem" }}>{shortcut}</span>

            {hasSubMenu && hasSubMenu.length !== 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            ) : (
              ""
            )}
          </button>
        )}
      </div>
      {bool && hasSubMenu && hasSubMenu !== 0 && (
        <div className="menu-item">
          <Submenu
            depth={depth}
            data={data.submenu}
            bool={bool2}
            checked={checked}
            label={data.label}
          />
        </div>
      )}
    </>
  );
};

export default ListMenu;
