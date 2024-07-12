import React, { useState } from 'react';
import styles from './SplitContainer.module.scss';
import { Intro } from 'components/Intro/Intro';
import { Footer } from 'components/Footer/Footer';
import { ScrollAnchors } from 'components/ScrollAnchors/ScrollAnchors';
import { OccupationSection } from 'components/Sections/Ocupation/OcupationSection';
import { IconStack } from 'components/IconStack/IconStack';
import { ProjectSection } from 'components/Sections/Projects/ProjectSection';

const SplitContainer: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(e.currentTarget.scrollTop);
  };

  return (
    <div className={styles["split-container"]}>
      <div className={styles["left-side"]}>
        <h1 className={styles["name"]}> Coy Kwan</h1>
        <h2 className={styles["title"]}>Software Engineer</h2>
        <IconStack />
        <ScrollAnchors />
      </div>
      <div className={styles["right-side"]} onScroll={handleScroll}>
        <div
          className={styles["scrollable-content"]}
          style={{ marginTop: -scrollPosition }}
        >
          <section id="section-one">
            <Intro />
          </section>
          <OccupationSection />
          <section id="section-three">
            <hr className="rounded"/>
            <div className={styles["projects-blurb"]}>
              If you wanna check out other cool stuff I build you can check out all my projects below,
              check back often as I update with new stuff im building!
            </div>
            <ProjectSection />
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SplitContainer;