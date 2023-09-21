import { colors, styled, Typography } from '@mui/material';
import style from './Footer.module.scss';

export const Footer = () => (
    <FooterWrapper>
      <p className={style["footer"]}>
        {new Date().getFullYear()} Made by yours truly using Next.js, Material UI, and TypeScript all deployed with Vercel
      </p>
    </FooterWrapper>
  );
  const FooterWrapper = styled("div")({
    bottom: 0,
    color: "#D5E0EC",
    fontsize: "6px",
    padding: "1rem",
    marginTop: "1rem",
  });

  const FooterText = styled(Typography)`
    text-transform: uppercase;
  `;