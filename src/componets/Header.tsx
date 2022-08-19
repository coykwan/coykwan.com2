import Link from "next/link";
// import { SocialIcon } from 'react-social-icons';
import Icon from '@mdi/react'
import { mdiAccount, mdiGithub, mdiGmail, mdiLinkedin} from '@mdi/js'
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Padding } from "@mui/icons-material";
//import './Header.module.scss'


export const Header: React.FC = () => {
  return (
    <>
      <AppBar position="fixed">
        <div className="HeaderIcons" style={{position: 'fixed', right: '0', zIndex: '1'}}>
              <a href="https://github.com/coykwan" target = "blank"><Icon className="HeaderIcon" path={mdiGithub} size={2.0} color="#2F455C"/></a>
              <a href="mailto:coykwan@gmail.com"><Icon className="HeaderIcon" path={mdiGmail} size={2.0} color="#2F455C"/></a>
              <a href="https://www.linkedin.com/in/coy-kwan-4039b4192/" target = "blank"><Icon className="HeaderIcon" path={mdiLinkedin} size={2.0} color="#2F455C"/></a>
          </div>
        <Toolbar disableGutters variant="dense">
          <Typography color={"white"} variant='h2'  sx={{paddingBottom: '30px', paddingTop: '100px', paddingLeft: '60px'}}>Hi im glad you're here.</Typography>
        </Toolbar>
      </AppBar>
    </>

  );
};