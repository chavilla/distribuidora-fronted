import { createMuiTheme } from '@material-ui/core';
import { blue, grey } from '@material-ui/core/colors';

const Theme=createMuiTheme({
    palette:{
        primary:{
            main: blue[400]
        },
        secondary:{
            main: grey[700]
        },
        white:{
            main: '#ffffff'
        }
    },
    typography:{
        fontSize:14
    },

    spacing: 4
});

Theme.spacing(6);

export default Theme;