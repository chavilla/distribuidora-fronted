import { createMuiTheme } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const theme=createMuiTheme({
    palette:{
        primary:{
            main: blue[50]
        },
        secondary:{
            main: blue[700]
        },
        initial:{
            main: '#ffffff'
        }

    },
    typography:{
        fontSize:14
    },

    spacing: 4,
});

theme.spacing(8);



export default theme;