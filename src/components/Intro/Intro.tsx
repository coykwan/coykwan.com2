/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./Intro.module.scss";

export const Intro: React.FC = () => {
  return (
    <>
      <div className={styles["wrapper"]}>
        <p className={styles["intro"]}>
          Back in 2016 I wrote a Python program to do my calculus homework and
          now one CS degree later I still cant do calculus but I get to write
          more fun code.
        </p>
        <p className={styles["intro"]}>
          I'm currently working with .NET Core (C#), React, Node and Angular @
          RSM building learning tools for kids all across the country!
        </p>
        <p className={styles["intro"]}>
          When im not fighting the compiler or in CSS hell you can find me
          wrenching on my car, somewhere on a bicycle or 3d modeling and
          printing my latest contraption. You can checkout out what else I've been up to below!
        </p>
      </div>
    </>
  );
};
