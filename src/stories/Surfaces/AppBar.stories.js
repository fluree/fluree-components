import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { white } from "../../themes/colors";

export default {
  title: "Surfaces/App Bar",
};

export const AppBarWithButtons = () => (
  <AppBar position="static">
    <Toolbar style={{ justifyContent: "space-between" }}>
      <div>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
      </div>
      <div>
        <IconButton color="inherit">
          <MailIcon />
        </IconButton>
        <IconButton color="inherit">
          <BookmarkIcon />
        </IconButton>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit">
          <FavoriteIcon />
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
);

export const AppBarWithFab = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton color="inherit" edge="start">
        <MenuIcon />
      </IconButton>
      <Fab
        color="secondary"
        style={{
          position: "absolute",
          zIndex: 1,
          top: -30,
          left: 0,
          right: 0,
          margin: "0 auto",
        }}
      >
        <AddIcon />
      </Fab>
      <div style={{ flexGrow: 1 }} />
      <IconButton color="inherit">
        <SearchIcon />
      </IconButton>
      <IconButton color="inherit">
        <MoreVertIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export const WhiteAppBarWithFab = () => (
  <AppBar position="static" style={{ backgroundColor: white }}>
    <Toolbar>
      <IconButton edge="start">
        <MenuIcon />
      </IconButton>
      <Fab
        color="secondary"
        style={{
          position: "absolute",
          zIndex: 1,
          top: -30,
          left: 0,
          right: 0,
          margin: "0 auto",
        }}
      >
        <AddIcon />
      </Fab>
      <div style={{ flexGrow: 1 }} />
      <IconButton>
        <SearchIcon />
      </IconButton>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export const AppBarWithOffsetFab = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit">
        <MenuIcon />
      </IconButton>
      <div style={{flexGrow: 1}} />
      <Fab color="secondary" style={{position: "relative", bottom: 30}}>
        <AddIcon />
      </Fab>
    </Toolbar>
  </AppBar>
);
