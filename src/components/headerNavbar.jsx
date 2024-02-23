// AppBa etiqueta para el menu 
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon ,ListItemText, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom"; // aqui lo declaro porque es donde voy a usar todas mis rutas

export default function HeaderNavbarResponsive() {
  const [open, setOpen] = useState(false); 
  // componente dentro de otro componente 

  const navLinks = [
    { title: "Dashboard", path:"/" , icon : <InboxIcon /> },
    { title: "Register", path:"/register", icon: <DraftsIcon /> },
    { title: "Login", path:"/registerForm" },
    { title: "routeTwo", path:"/routeTwo"},
  ];
  function NavListDrawer() {
    return (
      <Box sx={{ width: 250 }}>
          {navLinks.map((link) => (
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding key={link.title}> {/*el item como tal la prop para eliminar un padding que se genera*/}
                  <ListItemButton 
                  component={NavLink}
                  to={link.path}
                  onClick={() => setOpen(false)} > {/*para crear una especie de boton*/}
                    <ListItemIcon onClick={() => setOpen(false)}> {/*para agregar un icono*/}
                      {link.icon} {/*el icono*/}
                    </ListItemIcon>
                    <ListItemText 
                    primary={link.title} 
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          ))}    
      </Box>
    )
  }
  return(
    <>
        <AppBar position="static"> {/*creo que de esta manera el resto de contenido se posiciona sobre el*/}
          <Toolbar> {/*esta etiqueta tiene la propiedad flex*/}
            <IconButton
              color="inherit"
              size="large"
              edge="start"
              aria-label="menu"
              onClick={() => setOpen(true)}
              sx={{ display: { xs: "flex", md: "none" } }}
            > 
              <MenuIcon />
            </IconButton>{/*boton con icono*/}
            <Typography
              variant="h6"
              sx={{ flexGrow: 1 }}
            > {/*con ese estilo  flexGrow el ocupa todo el espacio que alla y manda lo que sigue para el final  */}
              News
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "none", md:"block" } }}>
              {navLinks.map((link) => (
                <Button
                  key={link.title}
                  sx={{ color: "#fff" }}
                  component={NavLink}
                  to={link.path}
                >
                  {link.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
          sx={{ display: {md: "none" } }}
        >
          <NavListDrawer/>
        </Drawer>
    </>
  );
}