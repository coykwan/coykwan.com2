import React, { useState } from 'react';
import { Dialog, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import styles from './DialogComponent.module.scss';

const DialogComponent: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={styles["show-more"]}
        variant="contained"
        onClick={handleOpen}
      >
        See Slideshow
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className={styles["dialog"]}>
          <DialogContentText>{children}</DialogContentText>
        </DialogContent>
        <DialogActions className={styles["dialog"]}>
          <Button className={styles["close"]} onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogComponent;