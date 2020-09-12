import React from 'react';
//List components
import { List, ListItem, ListItemIcon, ListItemText, Divider, ThemeProvider } from '@material-ui/core';
//Icons
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import theme from '../themeConfig';

const ListNav = () => {
    return ( 
        <ThemeProvider theme={theme}>
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <InfoIcon></InfoIcon>
                    </ListItemIcon>
                    <ListItemText> 
                        Inicio
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ContactsIcon/>
                    </ListItemIcon>
                    <ListItemText> Tienda</ListItemText>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemIcon>
                       <LiveHelpIcon/>
                    </ListItemIcon>
                    <ListItemText> 
                        Carrito
                        </ListItemText>
                </ListItem>
            </List>
        </ThemeProvider>
     );
}
 
export default ListNav;