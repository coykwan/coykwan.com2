import React, { useState } from 'react';
import styles from './SplitContainer.module.scss';

const SplitContainer: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(e.currentTarget.scrollTop);
  };

  return (
    <div className={styles["split-container"]}>
      <div className={styles["left-side"]}>
        <h1 className={styles["name"]}> Coy Kwan</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className={styles["right-side"]} onScroll={handleScroll}>
        <div
          className={styles["scrollable-content"]}
          style={{ marginTop: -scrollPosition }}
        >
          <p>Right side</p>
        </div>
      </div>
    </div>
  );
};

export default SplitContainer;