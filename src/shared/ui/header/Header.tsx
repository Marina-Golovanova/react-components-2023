import React from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { routes } from "../../../app/constants";

import styles from "./header.module.scss";

const navItems = [
  {
    to: routes.root,
    title: "Main",
  },
  {
    to: routes.aboutUs,
    title: "About us",
  },
  {
    to: routes.form,
    title: "Form",
  },
];

export const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul className={styles.headerListLayout}>
          {navItems.map((section) => (
            <li key={section.title}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? cn(styles.headerItem, styles.headerItemActive)
                    : styles.headerItem
                }
                to={section.to}
              >
                {section.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
