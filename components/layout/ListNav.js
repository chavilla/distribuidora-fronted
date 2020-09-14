import React from "react";
//List components
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  ThemeProvider,
  Link,
} from "@material-ui/core";
//Icons
import InfoIcon from "@material-ui/icons/Info";
import ContactsIcon from "@material-ui/icons/Contacts";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import theme from "../themeConfig";

const ListNav = () => {
  return (
    <ThemeProvider theme={theme}>
      <List component="nav">
        <Link component="a" href="/">
          <ListItem button>
            <ListItemIcon>
              <InfoIcon></InfoIcon>
            </ListItemIcon>
            <ListItemText>Inicio</ListItemText>
          </ListItem>
        </Link>

        <Link component="a" href="/tienda">
          <ListItem button>
            <ListItemIcon>
              <ContactsIcon />
            </ListItemIcon>
            <ListItemText>Tienda</ListItemText>
          </ListItem>
        </Link>
        
        <Divider />

        <Link component="a" href="/carrito">
          <ListItem button>
            <ListItemIcon>
              <LiveHelpIcon />
            </ListItemIcon>
            <ListItemText>Carrito</ListItemText>
          </ListItem>
        </Link>
      </List>
    </ThemeProvider>
  );
};

export default ListNav;
