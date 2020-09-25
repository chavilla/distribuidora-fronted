import { createMuiTheme } from '@material-ui/core';
import { blue, grey, orange } from '@material-ui/core/colors';

const theme=createMuiTheme({
    palette:{
        primary:{
            main: orange[600]
        },
        secondary:{
            main: '#fafafa'
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