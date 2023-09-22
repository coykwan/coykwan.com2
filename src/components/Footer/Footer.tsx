import { colors, styled, Typography } from '@mui/material';
import style from './Footer.module.scss';

export const Footer = () => (
    <div className={style["footerWrapper"]}>
      <p className={style["footer"]}>
        {new Date().getFullYear()} Made by yours truly using Next.js, Material UI, and TypeScript all deployed with Vercel
      </p>
    </div>
  );
  // const FooterWrapper = styled("div")({
  //   color: "#D5E0EC",
  //   fontsize: "4px",
  //   padding: "1rem",
  //   marginTop: "1rem",
  //   marginBottom: "10rem",
  // });
