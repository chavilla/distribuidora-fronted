import { makeStyles } from "@material-ui/core/styles";
import theme from "../themeConfig";

    
export const useStyles = makeStyles((theme)=>({
    table: {
        minWidth: 200,
        maxWidth: "100%",
        marginBottom: 20
    },

    tableHeader:{
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },

    mx:{
        marginLeft:20,
        marginRight:20
    },

    btnProduct:{
        display:'block',
        width:'90%',
        marginLeft: 'auto',
        marginRight:' auto',
        marginBottom:10

    }

    }));
 