import React, { useState } from 'react';
import styles from './SplitContainer.module.scss';
import OccupationCard from 'components/Card/OccupationCardComponent';
import { mdiGithub, mdiGmail, mdiLinkedin } from "@mdi/js";
import Icon from "@mdi/react";
import { Intro } from 'components/Intro/Intro';
import { Footer } from 'components/Footer/Footer';

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
          <a
            href="https://www.linkedin.com/in/coy-kwan-4039b4192/"
            target="blank"
          >
            <Icon
              className="HeaderIcon"
              path={mdiLinkedin}
              size={1.5}
              color="#D5E0EC"
            />
          </a>
        </div>
      </div>
      <div className={styles["right-side"]} onScroll={handleScroll}>
        <div
          className={styles["scrollable-content"]}
          style={{ marginTop: -scrollPosition }}
        >
          <Intro />
          <OccupationCard
            title="RSM - Software Engineer HCD Division"
            subheading="2022 - Present"
            description="I am currently working as a software engineer at RSM in the Human Centered Design division, RSM's new in-house engineering division. I've worked fullstack on two complete learning management system projects, one for the National Fire Protection Assocation, using React, C#/Dotnet and one Carniegie Learning using Angular, Node, Java in a combination of microservices and monolith architecture. Likewise, practice agile development with all the goodies that come along with it"
          />
          <hr className="rounded" />
          <OccupationCard
            title="H&R Block - Software Engineer MyBlock Application"
            subheading="2021 - 2022"
            description="At H&R Block, I worked on the MyBlock application, a Angualr and C#/Dotnet that millions of people use every year to do their taxes because of this optimizing for speed and heavy user loads was a huge part of the job. If you've ever filed with H&R block you've used a ton of my code! MyBlock uses a microservice architecture and I worked on the front and back end of the application. At H&R Block used agile methodologies and I participated in daily standups, backlog refinements, sprint planning and retrospectives."
          />
          <hr className="rounded" />
          <OccupationCard
            title="C2FO - Software Engineer Intern Marketing Automation"
            subheading="2020"
            description="At my internship at C2FO I worked on the marketing automation team building a new internal marketing automation platform using Python with Django. The API provided our data science team, other devlopers and marketing analysts with a way to easily make informed marketing decisions. This is also where I learned the ins and outs of agile participating in daily standups, backlog refinements, sprint planning and retrospectives."
          />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SplitContainer;