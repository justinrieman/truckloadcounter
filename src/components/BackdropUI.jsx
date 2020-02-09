import React from 'react';
import Stats from './Stats';
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: 'white',
      width: '375px',
      backgroundColor: 'rgba(23, 23, 23, 0.95)',
      margin: 'auto'
    },
  }));

function BackdropUI(props) {

    const classes = useStyles();

   

    return (

        
            <Backdrop className={classes.backdrop} open={props.isOpen}>
                <button className="close" onClick={props.closeBackdrop}>X</button>
                <Stats 
                truckList={props.truckList}
                />
            </Backdrop>
        
        
    );
}

export default BackdropUI;