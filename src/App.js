import React, { useEffect, useState } from "react";
import { Switch } from "@mui/material";
import Menu from "./Component/Menu";
import "./index.css";
function App() {
  const menus = [
    {
      label: "Open with",
      submenu: [
        {
          label: "connect more apps",
        },
      ],
    },
    {
      label: "New folder",
    },
    {
      label: "Share",
    },
    {
      label: "Get link",
    },
    {
      label: "Add shortcut to Drive",
    },
    {
      label: "Move to",
    },
    {
      label: "Add to start",
    },
    {
      label: "Rename",
    },
    {
      label: "Change color",
      submenu: [],
    },
    {
      label: "Search with 003",
    },
    {
      label: "Download",
    },
    {
      label: "Rename",
    },
  ];
  const menu = [
    {
      label: "Cut",
      shortcut: "Crtl+X",
      icon: {},
      disable: true,
    },
    {
      label: "Copy",
      shortcut: "Crtl+C",
      icon: {},
      disable: true,
    },
    {
      label: "Paste",
      shortcut: "Crtl+V",
      icon: {},
      disable: false,
    },
    {
      label: "Paste without formating",
      shortcut: "Crtl+Shift+V",
      icon: {},
      disable: false,
    },
    {
      label: "Delete",
      shortcut: "",
      disable: true,
    },
    {
      label: "Suggest edits",
      shortcut: "",
      disable: false,
    },
    {
      label: "Link",
      shortcut: "Crtl+K",
      disable: false,
    },
    {
      label: "Select all matching text",
      shortcut: "",
      disable: false,
    },
    {
      label: "Clear formating",
      shortcut: "Crtl+/",
      disable: false,
    },
  ];
  // const menus = [
  //   {
  //     label: "open with",
  //     icon: {},
  //     submenu: [
  //       {
  //         label: "connect more apps",
  //         icon: {},
  //       },
  //     ],
  //   },
  //   {
  //     label: "New folder",
  //     icon: {},
  //     submenu: [
  //       {
  //         label: "Sub Menu 1",
  //       },
  //       {
  //         label: "Sub Menu 2",
  //       },
  //     ],
  //   },
  //   {
  //     label: "Menu 3",
  //     submenu: [
  //       {
  //         label: "Sub Menu 1",
  //         submenu: [
  //           {
  //             label: "Boom 1",
  //           },
  //           {
  //             label: "Boom 2",
  //           },
  //         ],
  //       },
  //       {
  //         label: "Sub Menu 2",
  //         submenu: [
  //           {
  //             label: "Deep 1",
  //           },
  //           {
  //             label: "Deep 2",
  //             submenu: [
  //               {
  //                 label: "Lorem 1",
  //               },
  //               {
  //                 label: "Lorem 2",
  //                 submenu: [
  //                   {
  //                     label: "Super Deep",
  //                   },
  //                 ],
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         label: "Sub Menu 3",
  //       },
  //       {
  //         label: "Sub Menu 4",
  //         submenu: [
  //           {
  //             label: "Last 1",
  //           },
  //           {
  //             label: "Last 2",
  //           },
  //           {
  //             label: "Last 3",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     label: "Menu 4",
  //   },
  // ];

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="container">
      <div className="Switch">
        <label>inside</label>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <label>outside</label>
      </div>

      <div className="menu">
        <Menu menus={menus} checked={checked} />
      </div>
      <div className="menu" style={{ marginLeft: "250px" }}>
        <Menu menus={menu} checked={false} />
      </div>
    </div>
  );
}

export default App;
