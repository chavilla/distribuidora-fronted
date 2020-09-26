import React from "react";
import {
  makeStyles,
  Drawer,
  Divider,
  Typography,
  ThemeProvider,
  Container,
} from "@material-ui/core";
import ListNav from "./ListNav";
import theme from "../themeConfig";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  company: {
    marginTop: "5%",
  },
  fondo: {
    minHeight: 64,
    backgroundColor: "#23282D",
  },
}));

const DrawerOriginal = (props) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        className={classes.drawer}
        variant={props.variant}
        classes={{ paper: classes.drawerPaper }}
        open={props.open}
        onClose={props.onClose ? props.onClose : null}
      >
        <Container className={classes.toolbar} className={classes.fondo}>
          <Typography
            variant="h4"
            color="primary"
            align="center"
            className={classes.company}
          >
            Chaviweb
          </Typography>
        </Container>

        <Divider />
        <ListNav />
      </Drawer>
    </ThemeProvider>
  );
};

export default DrawerOriginal;
