import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { ListItemIcon, ListItemText } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple"; // Example icon
import CakeIcon from "@mui/icons-material/Cake"; // Example icon
import FaceIcon from "@mui/icons-material/Face"; // Example icon
import WorkIcon from "@mui/icons-material/Work"; // Example icon
import ChairIcon from "@mui/icons-material/Chair"; // Example icon
import HomeIcon from "@mui/icons-material/Home"; // Example icon
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Products from "./Products";

const options = [
  { label: "Grocery", icon: <AppleIcon />, route: "/products" },
  { label: "Bakery", icon: <CakeIcon />, route: "/bakery" },
  { label: "Makeup", icon: <FaceIcon />, route: "/makeup" },
  { label: "Bags", icon: <WorkIcon />, route: "/bags" },
  { label: "Clothing", icon: <ChairIcon />, route: "/clothing" },
  { label: "Furniture", icon: <HomeIcon />, route: "/furniture" },
  // { label: "Daily Needs", icon: <AppleIcon />, route: "/daily-needs" },
];

export default function SplitButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const navigate = useNavigate(); // Initialize navigate

  const handleClick = () => {
    navigate(options[selectedIndex].route); // Navigate to selected route
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
    navigate(options[index].route); // Navigate to selected route
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup
        ref={anchorRef}
        aria-label="Button group with a nested menu"
        sx={{
          "& .MuiButton-root": {
            backgroundColor: "#019376", // Custom green color
            color: "#fff", // White text
            textTransform: "none", // Disable uppercase
            fontWeight: "bold",
          },
          "& .MuiButton-root:hover": {
            backgroundColor: "#017d68", // Slightly darker green on hover
          },
        }}
      >
        <Button onClick={handleClick}>
          {options[selectedIndex].icon} {options[selectedIndex].label}
        </Button>
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{ zIndex: 1 }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option.label}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                      sx={{
                        "& .MuiListItemIcon-root": {
                          color: "#4caf50", // Icon color
                        },
                      }}
                    >
                      <ListItemIcon>{option.icon}</ListItemIcon>
                      <ListItemText>{option.label}</ListItemText>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
