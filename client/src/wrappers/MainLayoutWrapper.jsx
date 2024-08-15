import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TopBar from "../pages/dashboard/TopBar";
import { Stack, Tooltip, Typography } from "@mui/material";
import sideNavLinks from "../configs/sideNavLinks";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import BottomNav from "../components/BottomNav";
import BottomNavSD from "../components/BottomNavSD";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";
import { red } from "@mui/material/colors";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  // Hide scrollbar
  overflowY: "auto", // Enable vertical scrolling
  "&::-webkit-scrollbar": {
    width: 0, // Hide scrollbar for WebKit-based browsers
  },
  msOverFlowStyle: "none", // Hide scrollbar for IE and Edge
  scrollbarWidth: "none", // Hide scrollbar for Firefox
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  // Hide scrollbar
  "&::-webkit-scrollbar": {
    width: 0, // Hide scrollbar for WebKit-based browsers
  },
  msOverFlowStyle: "none", // Hide scrollbar for IE and Edge
  scrollbarWidth: "none", // Hide scrollbar for Firefox
});

const DrawerHeader = (props) => {
  const theme = useTheme();
  return (
    <Box
      // className="outlined"
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "flex-end",
        padding: (theme) => theme.spacing(0, 1),
        ...theme.mixins.toolbar,
      }}
      {...props}
    />
  );
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const MainLayoutWrapper = ({ children }) => {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const basePath = pathname.split("/")?.[1];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          open={open}
          elevation={0}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Toolbar
            //   variant="dense"
            sx={{ bgcolor: (theme) => theme?.palette?.black?.darkest }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <TopBar />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              backgroundColor: (theme) => theme?.palette?.black?.main, // Set your desired color here
            },
          }}
        >
          <DrawerHeader>
            <Stack direction="row" width={1} alignItems="center">
              <Box flex={1} alignItems="center">
                <Typography
                  variant="h5"
                  textAlign="center"
                  color={(theme) => theme.palette.white.main}
                >
                  iLMS
                </Typography>
              </Box>
              <Box>
                <IconButton
                  onClick={handleDrawerClose}
                  sx={{ color: (theme) => theme.palette.white.main }}
                >
                  <ChevronLeftIcon />
                </IconButton>
              </Box>
            </Stack>
          </DrawerHeader>
          <Divider />
          <List>
            {sideNavLinks?.map((navLink, index) => (
              <ListItem
                key={navLink?.text}
                padding="0px"
                sx={{
                  display: "block",
                  color: (theme) => theme.palette.white.main,

                  // px: basePath === navLink?.text ? "8px" : 0,
                }}
              >
                <ListItemButton
                  onClick={() => navigate(`/${navLink?.text}`)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    bgcolor:
                      basePath === navLink?.text
                        ? (theme) => theme.palette.black.dark
                        : "none",
                    borderRadius: "20px",
                    "&:hover": {
                      bgcolor:
                        basePath === navLink?.text
                          ? (theme) => theme.palette.black.dark
                          : (theme) => theme.palette.black.light, // Change background color on hover
                    },
                  }}
                >
                  {open ? (
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color:
                          basePath === navLink?.text
                            ? (theme) => theme.palette.primary.main
                            : (theme) => theme.palette.white.main,
                      }}
                    >
                      {navLink?.icon}
                    </ListItemIcon>
                  ) : (
                    <Tooltip
                      title={
                        navLink?.text?.[0]?.toUpperCase() +
                        navLink?.text?.substring(1)
                      }
                      placement="right"
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          color:
                            basePath === navLink?.text
                              ? (theme) => theme.palette.primary.main
                              : (theme) => theme.palette.white.main,
                        }}
                      >
                        {navLink?.icon}
                      </ListItemIcon>
                    </Tooltip>
                  )}
                  {/* <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color:
                        basePath === navLink?.text
                          ? (theme) => theme.palette.primary.main
                          : (theme) => theme.palette.white.main,
                    }}
                  >
                    {open ? (
                      navLink?.icon
                    ) : (
                      <Tooltip
                        title={
                          navLink?.text?.[0]?.toUpperCase() +
                          navLink?.text?.substring(1)
                        }
                        placement="right"
                      >
                        {navLink?.icon}
                      </Tooltip>
                    )}
                  </ListItemIcon> */}
                  <ListItemText
                    primary={navLink?.text}
                    sx={{
                      opacity: open ? 1 : 0,
                      textTransform: "capitalize",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <Divider
              sx={{
                opacity: "0.4",
                backgroundColor: (theme) => theme.palette.black.light,
                width: "100%",
                my: 1,
              }}
            />
            <ListItem
              padding="0px"
              sx={{
                display: "block",
                color: (theme) => theme.palette.white.main,

                // px: basePath === navLink?.text ? "8px" : 0,
              }}
            >
              <ListItemButton
                onClick={() => navigate(`/signin`)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,

                  borderRadius: "20px",
                  "&:hover": {
                    bgcolor: red[900], // Change background color on hover
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: (theme) => theme.palette.white.main,
                  }}
                >
                  <ExitToAppTwoToneIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Sign out"
                  sx={{
                    opacity: open ? 1 : 0,
                    textTransform: "capitalize",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 1, md: 3 },
            bgcolor: (theme) => theme?.palette?.black?.darkest,
          }}
          minHeight="100vh"
        >
          <Box display={{ xs: "none", md: "block" }}>
            <DrawerHeader />
          </Box>
          {children}
        </Box>
      </Box>
      <BottomNav />
      <BottomNavSD />
    </>
  );
};

export default MainLayoutWrapper;
