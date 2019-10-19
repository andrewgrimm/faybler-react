/* eslint react/jsx-props-no-spreading: 0 */
// Menu item uses attribute 'component={Link}' as a nested navlink is only applied on the text

import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';// Floating Action Button
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme: Theme) => createStyles({
  margin: {
    margin: theme.spacing(1),
    position: 'fixed',
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const AppMenu: React.FunctionComponent<{}> = () => {
  const classes = useStyles({});

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        size="small"
        className={classes.margin}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AddIcon />
      </Fab>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} {...{ to: '/empty' }}>
          Empty
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} {...{ to: '/' }}>
          Featured
        </MenuItem>
      </Menu>
    </>
  );
};

export default AppMenu;
