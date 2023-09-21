import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./OccupationCardComponent.module.scss";

export interface OccupationCardProps {
  title: string;
  subheading?: string;
  description: string;
}

const OccupationCard: React.FC<OccupationCardProps> = (props: OccupationCardProps) => {
  return (
    <Card sx={{ minWidth: 275 }} className={styles["occupation-card"]}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} gutterBottom className={styles["title"]}>
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          {props.subheading}
        </Typography>
        <Typography variant="body2" className={styles["description"]}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}

export default OccupationCard;