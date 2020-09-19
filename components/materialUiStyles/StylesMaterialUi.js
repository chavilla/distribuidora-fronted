import { makeStyles } from "@material-ui/core/styles";
import theme from "../themeConfig";

    
export const useStyles = makeStyles({
    table: {
        minWidth: 200,
        maxWidth: "100%",
        marginBottom: 20
    },
    tableContainer:{
        border: '1px',
        maxWidth:'90%', 
        marginLeft: "auto",
        marginRight: "auto",
    },

    tableHeader:{
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    }
    });
 