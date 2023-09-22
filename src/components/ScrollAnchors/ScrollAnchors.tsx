import React from "react";
import style from "./ScrollAnchors.module.scss";
import Icon from "@mdi/react";
import { mdiSquareSmall } from "@mdi/js";

export const ScrollAnchors: React.FC = () => {
  return (
    <>
      <nav className={style["nav"]}>
        <a href="#section-one" className={style["anchor"]}>
          <Icon
            className="HeaderIcon"
            path={mdiSquareSmall}
            size={1.5}
            color="#D5E0EC"
          />
          <p className={style["description"]}>About Me</p>
        </a>
        <a href="#section-two" className={style["anchor"]}>
          <Icon
            className="HeaderIcon"
            path={mdiSquareSmall}
            size={1.5}
            color="#D5E0EC"
          />
          <p className={style["description"]}>Experience</p>
        </a>
        <a href="#section-three" className={style["anchor"]}>
          <Icon
            className="HeaderIcon"
            path={mdiSquareSmall}
            size={1.5}
            color="#D5E0EC"
          />
          <p className={style["description"]}>Cool Stuff</p>
        </a>
      </nav>
    </>
  );
};
