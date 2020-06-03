// React
import { useState } from 'react';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Constants
import { HOME, PHOTO_ALBUM } from '../../constants/general';

interface NavigationBarProps {
  title: string;
}

const NavigationBar = ({ title }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const redirectHome = (event) => {
    window.location.href = '/';
  };

  const redirectPhotoAlbum = (event) => {
    window.location.href = '/photo-album';
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={(event) => {
            handleMenu(event);
          }}
        >
          <MenuIcon />
          <Menu color="inherit" id="menu-appbar" anchorEl={anchorEl} open={open}>
            <MenuItem
              color="inherit"
              onClick={(event) => {
                redirectHome(event);
              }}
            >
              {HOME}
            </MenuItem>
            <MenuItem
              color="inherit"
              onClick={(event) => {
                redirectPhotoAlbum(event);
              }}
            >
              {PHOTO_ALBUM}
            </MenuItem>
          </Menu>
        </IconButton>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};
export default NavigationBar;
