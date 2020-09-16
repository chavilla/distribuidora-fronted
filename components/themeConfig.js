import { createMuiTheme } from '@material-ui/core';
import { blue, grey, orange } from '@material-ui/core/colors';

const theme=createMuiTheme({
    palette:{
        primary:{
            main: orange[600]
        },
        secondary:{
            main: '#ffffff'
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

theme.spacing(6);



export default theme;