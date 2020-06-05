// React
import { useState } from 'react';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        </IconButton>
        <Menu
          id="menu-appbar"
          color="inherit"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => {
            handleClose();
          }}
        >
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
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};
export default NavigationBar;
