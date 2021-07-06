import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function MenuBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup color="secondary" aria-label="outlined secondary button group">
        <Button>Artesanias</Button>
        <Button>Decoracion</Button>
        <Button>Ceramica</Button>
        <Button>Productos</Button>
        <Button>Moda</Button>
      </ButtonGroup>
    
    </div>
  );
}
