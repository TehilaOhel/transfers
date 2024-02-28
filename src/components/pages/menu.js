import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Outlet } from 'react-router-dom';

export const Menu=()=> {
  return <>

    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          תפריט
        </Typography>
        <Button color="inherit" component={Link} to="/">משתמש </Button>
        <Button color="inherit" component={Link} to="./myAccont">איזור האישי</Button>
        <Button color="inherit" component={Link} to="./transfers">תנועות בחשבון</Button>
        <Button color="inherit" component={Link} to="./useings"> מימוש הטבה</Button>
        <Button color="inherit" component={Link} to="./makingTransfer">ביצוע העברה </Button>
      </Toolbar>
    </AppBar> 
    <Outlet /> </>}