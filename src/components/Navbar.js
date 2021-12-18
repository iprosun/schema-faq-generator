import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, BrowserRouter } from 'react-router-dom';

const pages = [{
    title: 'FAQ Schema Generator',
    link: '/',
}, {
    title: 'FAQ HTML Generator',
    link: '/faq-html-generator'
}, {
    title: 'Review Schema Generator',
    link: '/review-schema-generator'
}
];

const Nabar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters 
        sx={{
            justifyContent: 'space-between',
        }}>
          <Typography
            variant="h6"
            noWrap
            style={{ marginRight: '20px', background: '#4fb4e6', padding: '0 10px', borderRadius: '5px' }}
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            H SEO
          </Typography>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem style={{width:"100%"}} onClick={handleCloseNavMenu} component={Link} to={page.link} key={page.title}>
                    <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
                    
              ))}
            </Menu>
          </Box>
          <div>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ marginRight: '20px', background: '#4fb4e6', padding: '0 10px', borderRadius: '5px' }}
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            H SEO
          </Typography>
          </div>
          
          <Box sx={{ flexGrow: 1, justifyContent:'end', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
            
                <MenuItem style={{marginRight:20}} onClick={handleCloseNavMenu} component={Link} to={page.link} key={page.title} >
                    <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nabar;