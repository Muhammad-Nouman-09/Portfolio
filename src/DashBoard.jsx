import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Button,  } from "@mui/material";
import logo from "./Assets/Logo-new.webp";
import SplitButton from "./SplitButton";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, Outlet } from "react-router-dom";
import Hero from "./Hero";
import Products from "./Products";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartList from "./CartList";
import { useDispatch, useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


const DashBoard = () => {
   const [open, setOpen] = React.useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
      
    };
    const {count} = useSelector((state)=>state.counter) 
    const Dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <SplitButton />
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Shops
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Offers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Flash Sales
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Manufacturer
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Authors
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      FAQS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Costomer Refund Policy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Vandor Refund Policy
                    </a>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
             
              {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
            </ul>
            <form className="d-flex px-3">
              <div><IconButton aria-label="cart">
      <StyledBadge badgeContent={count} color="secondary">
        <ShoppingCartIcon onClick={()=>
          setOpen(!open)
        } color="action"/>
      </StyledBadge>
    </IconButton></div>
              <div className="px-3">
                {" "}
                <Link to= "/SignUp" style={{ textDecoration: "none" }} >
                <Button
                  variant="contained"
                  
                  sx={{
                    backgroundColor: "#019376", // Custom green color
                    color: "#fff", // White text
                    textTransform: "none", // Disable uppercase
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#017d68", // Slightly darker green on hover
                    },
                  }}
                >
                  Join
                </Button>
                </Link>
              </div>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#019376", // Custom green color
                  color: "#fff", // White text
                  textTransform: "none", // Disable uppercase
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#017d68", // Slightly darker green on hover
                  },
                }}
              >
                Become A Seller
              </Button>
            </form>
          </div>
        </div>
      </nav>
      <nav>
        <Link to="/Products">Products</Link>
      </nav>

<CartList toggleDrawer={toggleDrawer} open={open} />
<Hero/>
      <Outlet />
    </div>
  );
};

export default DashBoard;
