import React from 'react';
import { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
      flexGrow: 1
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [time, setTime] = useState();

  setTimeout(() => {
    const d = new Date()
    let hour = d.getHours()
    let minutes = d.getMinutes('00')
    let seconds = d.getSeconds()
    let fullHours = `${hour}:${minutes}:${seconds}`
    setTime(fullHours)
  }, 1000)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Hamburgueria XGostoso
          </Typography>
          <Typography variant="h6">
            {
                time
            }
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}