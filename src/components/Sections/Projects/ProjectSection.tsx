import React from "react";
import ProjectCard from "components/Card/ProjectCard/ProjectCardComponent";

export const ProjectSection: React.FC = () => {
  return (
    <>
      <ProjectCard
        title="Titanium Gravel Bike"
        description="I designed and had this bike frame built by a specailty titanium frame builder in China, I designed it using a combination of online frame geometry tools and Autodesk inventor"
        image="/technicalDrawing.jpg"
      />
      <hr className="rounded" />
      <ProjectCard
        showMore={true}
        title="Fixed wing FPV Drone"
        description="Currently developing a fixed wing FPV drone for long range FPV flights, I am using Solidworks to design the airframe and the internal components and 3D printing the parts using a Bambu lab X1C with CFRP filament"
        image="/airframe.jpg"
      />
      <hr className="rounded" />
      <ProjectCard
        title="86/BRZ Intake duct"
        description="Printed my own intake duct for my 86/BRZ using a Bambu lab X1C with PA12-CF"
        image="/intake-duct.jpg"
      />
      <hr className="rounded" />
    </>
  );
};
