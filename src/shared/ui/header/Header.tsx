import React from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { routes } from "../../../app/constants";

import styles from "./header.module.scss";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul className={styles.headerListLayout}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? cn(styles.headerItem, styles.headerItemActive)
                    : styles.headerItem
                }
                to={routes.root}
              >
                Main
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.headerItem} to={routes.aboutUs}>
                About us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
