/* eslint-disable react/jsx-curly-brace-presence */
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { ReactElement, Dispatch, SetStateAction } from "react";

interface ICustomDialog {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  title: string;
  content: string;
}

const CustomDialog: React.FC<ICustomDialog> = ({
  opened,
  setOpened,
  title,
  content,
}): ReactElement => {
  return (
    <div>
      <Dialog
        open={opened}
        onClose={() => {
          setOpened(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpened(false);
            }}
            color="primary"
            autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomDialog;
