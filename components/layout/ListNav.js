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
  Typography
} from "@material-ui/core";
//Icons
import InfoIcon from "@material-ui/icons/Info";
import ContactsIcon from "@material-ui/icons/Contacts";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import theme from "../themeConfig";

const ListNav = () => {
  return (
   
      <List component="nav">
        <Link component="a" href="/">
          <ListItem button>
            <ListItemIcon>
              <InfoIcon color='primary' ></InfoIcon>
            </ListItemIcon>
            <ListItemText><Typography className='links'>Inicio</Typography></ListItemText>
          </ListItem>
        </Link>

        <Link component="a" href="/tienda">
          <ListItem button>
            <ListItemIcon>
              <ContactsIcon color='primary' />
            </ListItemIcon>
            <ListItemText>Tienda</ListItemText>
          </ListItem>
        </Link>
        
        <Divider />

        <Link component="a" href="/carrito">
          <ListItem button>
            <ListItemIcon>
              <LiveHelpIcon  color='primary' />
            </ListItemIcon>
            <ListItemText>Carrito</ListItemText>
          </ListItem>
        </Link>
      </List>

  );
};

export default ListNav;
