/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./IconStack.module.scss";
import { mdiGithub, mdiGmail, mdiLinkedin } from "@mdi/js";
import Icon from "@mdi/react";

export const IconStack: React.FC = () => {
  return (
    <div className="HeaderIcons" style={{ display: "flex", gap: "1rem" }}>
      <a href="https://github.com/coykwan" target="blank">
        <Icon
          className="HeaderIcon"
          path={mdiGithub}
          size={1.5}
          color="#D5E0EC"
        />
      </a>
      <a href="mailto:coykwan@gmail.com">
        <Icon
          className="HeaderIcon"
          path={mdiGmail}
          size={1.5}
          color="#D5E0EC"
        />
      </a>
      <a href="https://www.linkedin.com/in/coy-kwan-4039b4192/" target="blank">
        <Icon
          className="HeaderIcon"
          path={mdiLinkedin}
          size={1.5}
          color="#D5E0EC"
        />
      </a>
    </div>
  );
};
