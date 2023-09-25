import React from "react";
import OccupationCard from "components/Card/OccupationCard/OccupationCardComponent";

export const OccupationSection: React.FC = () => {
  return (
    <section id="section-two">
      <OccupationCard
        title="RSM - Software Engineer HCD Division"
        subheading="2022 - Present"
        description="I am currently working as a software engineer at RSM in the Human Centered Design division, RSM's new in-house engineering division. I've worked fullstack on two complete learning management system projects, one for the National Fire Protection Assocation, using React, C#/.NET and one Carniegie Learning using Angular, Node, Java in (mostly) a monolith architecture. Likewise, practice agile development with all the goodies that come along with it"
      />
      <hr className="rounded" />
      <OccupationCard
        title="H&R Block - Software Engineer MyBlock Application"
        subheading="2021 - 2022"
        description="At H&R Block, I worked on the MyBlock application, a Angualr and C#/.NET that millions of people use every year to do their taxes because of this optimizing for speed and heavy user loads was a huge part of the job. If you've ever filed with H&R block you've used a ton of my code! MyBlock uses a microservice architecture and I worked on the front and back end of the application. At H&R Block used agile methodologies and I participated in daily standups, backlog refinements, sprint planning and retrospectives."
      />
      <hr className="rounded" />
      <OccupationCard
        title="C2FO - Software Engineer Intern Marketing Automation"
        subheading="2020"
        description="At my internship at C2FO I worked on the marketing automation team building a new internal marketing automation platform using Python with Django. The API provided our data science team, other devlopers and marketing analysts with a way to easily make informed marketing decisions. This is also where I learned the ins and outs of agile participating in daily standups, backlog refinements, sprint planning and retrospectives."
      />
    </section>
  );
};
