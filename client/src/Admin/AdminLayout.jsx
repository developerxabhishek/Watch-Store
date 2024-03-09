import * as React from "react";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AdminAddProduct from "./AdminAddProduct/AdminAddProduct";
import { MdDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { SiBrandfolder } from "react-icons/si";
import { IoBagAddOutline } from "react-icons/io5";

import { IoIosAddCircle } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineRateReview } from "react-icons/md";

import { Link, Outlet } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setUserDetails } from "../Slices/userDetailSlice";
const drawerWidth = 250;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    /**
     * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
     * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
     * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
     * proper interaction with the underlying content.
     */
    position: "relative",
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const AdminLayout = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1 }}
            component="div"
            style={{
              fontSize: "clamp(2.5rem,2vw,5rem)",
              fontWeight: "700",
              paddingLeft: "4vw",
              fontFamily: "serif",
            }}
          >
            Watch<span style={{ color: "orange" }}>Store </span>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <CiMenuFries style={{ fontSize: "40px" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open} onClick={handleDrawerClose}>
        <DrawerHeader />
        <Outlet />
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "black",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader style={{ backgroundColor: "black", color: "white" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon style={{ fontSize: "40px", color: "white" }} />
            ) : (
              <ChevronRightIcon style={{ fontSize: "40px", color: "white" }} />
            )}
          </IconButton>
          <h1 style={{ fontFamily: "serif" }}>Admin</h1>
        </DrawerHeader>
        <Divider />

        <List style={{ backgroundColor: "black", color: "white" }}>
          <ListItem disablePadding>
            <ListItemButton
              style={{ backgroundColor: "black", color: "white" }}
            >
              <ListItemIcon>
                <MdDashboard style={{ fontSize: "25px", color: "white" }} />
              </ListItemIcon>
              <ListItemText>
                <span style={{ fontSize: "20px", fontFamily: "serif" }}>
                  Dashboard
                </span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />

          <Accordion
            style={{ width: "100%", color: "white", backgroundColor: "black" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <MdOutlineProductionQuantityLimits
                style={{ marginRight: "25px", fontSize: "25px" }}
              />
              <span
                style={{
                  fontSize: "20px",
                  fontFamily: "serif",
                  color: "white",
                  backgroundColor: "black",
                }}
              >
                Products
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <Link to="/AdminAllProduct" style={{ color: "white" }}>
                <div style={{ marginBottom: "10px" }}>
                  <IoIosAddCircle
                    style={{ marginRight: "50px", fontSize: "15px" }}
                  />
                  <span style={{ fontSize: "2rem", fontFamily: "serif" }}>
                    All Products
                  </span>
                </div>
              </Link>
              <Link to="/AdminAddProduct" style={{ color: "white" }}>
                <div>
                  <IoIosAddCircle
                    style={{ marginRight: "50px", fontSize: "15px" }}
                  />
                  <span style={{ fontSize: "2rem", fontFamily: "serif" }}>
                    Add Products
                  </span>
                </div>
              </Link>
            </AccordionDetails>
          </Accordion>
          <Divider />
          <Link to="/AdminBrand">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SiBrandfolder
                    style={{
                      marginRight: "25px",
                      fontSize: "25px",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  />
                </ListItemIcon>
                <ListItemText>
                  <span
                    style={{
                      fontSize: "20px",
                      fontFamily: "serif",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  >
                    Brands
                  </span>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider />
          <Link to="/AdminOrder">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <IoBagAddOutline
                    style={{
                      marginRight: "25px",
                      fontSize: "25px",
                      color: "white",
                    }}
                  />
                </ListItemIcon>
                <ListItemText>
                  <span
                    style={{
                      fontSize: "20px",
                      fontFamily: "serif",
                      color: "white",
                    }}
                  >
                    Orders
                  </span>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider />
          <Link to="/AdminOrder">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MdOutlineRateReview
                    style={{
                      marginRight: "25px",
                      fontSize: "25px",
                      color: "white",
                    }}
                  />
                </ListItemIcon>
                <ListItemText>
                  <span
                    style={{
                      fontSize: "20px",
                      fontFamily: "serif",
                      color: "white",
                    }}
                  >
                    Reviews
                  </span>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider />
          <Link to="/AdminProfile">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CiUser
                    style={{
                      marginRight: "25px",
                      fontSize: "25px",
                      color: "white",
                    }}
                  />
                </ListItemIcon>
                <ListItemText>
                  <span
                    style={{
                      fontSize: "20px",
                      fontFamily: "serif",
                      color: "white",
                    }}
                  >
                    Profile
                  </span>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>

          <ListItem
            disablePadding
            onClick={() => {
              dispatch(setUserDetails({}));
              toast.error(" Logout Successfull !", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              navigate("/");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <IoIosLogOut
                  style={{
                    marginRight: "25px",
                    fontSize: "25px",
                    color: "white",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <span
                  style={{
                    fontSize: "20px",
                    fontFamily: "serif",
                    color: "white",
                  }}
                >
                  Logout
                </span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
export default AdminLayout;

// import { Outlet ,Link} from "react-router-dom";
// import AdminNavbar from "./AdminNavbar/AdminNavbar";

// const AdminLayout = () => {
//   return(
//   <>
// <AdminNavbar/>
// <Outlet/>

//   </>
//   );
// };

// export default AdminLayout;
