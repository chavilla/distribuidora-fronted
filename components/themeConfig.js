import { createMuiTheme } from '@material-ui/core';
import { blue, red, grey } from '@material-ui/core/colors';

const theme=createMuiTheme({
    palette:{
        primary:{
            main: grey[900]
        },
        secondary:{
            main: '#ffffff'
        },
        initial:{
            main: '#ffffff'
        },
        error:{
            main: red[300]
        }
    },
    typography:{
        fontSize:14
    },

    spacing: 4,
});

theme.spacing(8);



export default theme;