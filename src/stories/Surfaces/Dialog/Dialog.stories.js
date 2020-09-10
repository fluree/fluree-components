import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

export default {
  title: "Surfaces/Dialog Boxes",
  component: Dialog,
};

const Template = (args) => {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="outlined" color="primary" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="open-dialogue-title"
        aria-describedby="open-dialog-description"
      >
        {args.title && (
          <DialogTitle id="open-dialog-title">{args.title}</DialogTitle>
        )}
        <DialogContent>
          <DialogContentText id="open-dialog-description">
            {args.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions style={args.actionStyle}>
          {args.actions}
          <div>
            <Button size="small" color="secondary" onClick={handleClose}>
              {args.button1}
            </Button>
            <Button size="small" color="secondary" onClick={handleClose}>
              {args.button2}
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const StandardDialog = Template.bind({});
StandardDialog.args = {
  title: "Permissions",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisinuli.",
  actions: <Button>More Info</Button>,
  actionStyle: {
    justifyContent: "space-between",
  },
  button1: "Decline",
  button2: "Accept",
};

export const DialogNoTitle = Template.bind({});
DialogNoTitle.args = {
  content: "Discard draft?",
  button1: "Cancel",
  button2: "Discard",
};

export const AreYouSure = Template.bind({});
AreYouSure.args = {
  title: "Are you sure?",
  content: "You'll lose all photos and media!",
  button1: "Cancel",
  button2: "Delete",
};
