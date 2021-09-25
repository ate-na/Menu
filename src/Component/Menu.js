import React, { useState } from "react";
import ListMenu from "./ListMenu";
import "../index.css";
const Menu = ({ menus, checked }) => {
  return (
    <ul className="menu-list">
      {menus.map((menu) => {
        const depth = 1;

        return (
          <ListMenu
            depth={depth}
            data={menu}
            hasSubMenu={menu.submenu}
            checked={checked}
            disabled={menu.disable}
            shortcut={menu.shortcut}
          />
        );
      })}
    </ul>
  );
};

export default Menu;
