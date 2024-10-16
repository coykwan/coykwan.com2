import React from "react";
import OccupationCard from "components/Card/OccupationCard/OccupationCardComponent";

export const OccupationSection: React.FC = () => {
  return (
    <section id="section-two">
      <OccupationCard
        title="RSM - Software Engineer HCD Division"
        subheading="2022 - 2024"
        description="As a software engineer at RSM in the Human Centered Design division, I've worked fullstack on a variety of projects. Three different learning management system projects, one for the National Fire Protection Association, using React, C#/.NET, one Carnegie Learning using Angular, Node, Java in (mostly) a monolith architecture and another in house system for RSM using React and C#/.net, all three were built from the ground up. Along with those projects I also developed several AI powered tools and applications: an in house translation tool for developers to add multilingual accessability to our applications, a tool to populate or enrich thousands of e commerce descriptions and spearheaded the companies research into retrieval augmented generation. I also lead the development of an internal data analytics prototype used to process records with hundreds of thousands of entries and optimized that process to be fast enough to run solely in the browser.  Likewise, we practiced agile development with all the goodies that come along with it"
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
