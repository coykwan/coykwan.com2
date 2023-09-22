import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./ProjectCardComponent.module.scss";
import Image from "next/image";

export interface ProjectCardProps {
  title: string;
  subheading?: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
  return (
    <Card sx={{ minWidth: 275 }} className={styles["project-card"]}>
      <CardContent>
        <Typography
          sx={{ fontSize: 24 }}
          gutterBottom
          className={styles["title"]}
        >
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>{props.subheading}</Typography>
        <Typography variant="body2" className={styles["description"]}>
          {props.description}
        </Typography>
        <Image
          src={props.image}
          alt="Bike Frame Image"
          width={800}
          height={500}
        />
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default ProjectCard;