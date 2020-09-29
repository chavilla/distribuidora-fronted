import { createMuiTheme } from '@material-ui/core';
import { blue, red } from '@material-ui/core/colors';

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