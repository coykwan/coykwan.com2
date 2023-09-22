import React from "react";
import ProjectCard from "components/Card/ProjectCard/ProjectCardComponent";

export const ProjectSection: React.FC = () => {
  return (
    <>
      <ProjectCard
        title="Titanium Gravel Bike"
        description="I designed and had this bike frame built by a specailty titanium frame builder in China, I designed it using a combination of online frame geometry tools and Autodesk inventor"
        //img prop of technical drawing.jpg in the assets folder
        image="/technicalDrawing.jpg"
      />
      <hr className="rounded" />
    </>
  );
};
