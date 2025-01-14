import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Card,
  Rating,
  Typography,
  Button,
  //LinearProgress,
  Tooltip,
} from "@mui/material";
import img1 from "./Assets-begs/7Carmine-Red-Ladies-Hand-Bag.webp";
// import img2 from "./Assets-begs/Carmine-Red-Ladies-Hand-Bag.webp";
import img3 from "./Assets-begs/Armani_leather_purse.webp";
import img4 from "./Assets-begs/Armani_purse.webp";
import img5 from "./Assets-begs/cys-m3.webp";
import img6 from "./Assets-begs/givency_purse.webp";
import img7 from "./Assets-begs/gucci_mini_purse.webp";
import img8 from "./Assets-begs/gucci_purse.webp";
import DashBoard from './DashBoard';


const BagsProducts = () => {
    const ProductCard = [
        {
          id: "1",
          image: img1,
          title: "Carmine-Red-Ladies-Hand-Bag",
          catagory: "Bags",
          price: "10",
        },
        // {
        //   id: "2",
        //   image: img2,
        //   title: "Carmine-Red-Ladies-Hand-Bag",
        //   catagory: "Bags",
        //   price: "10",
        // },
        {
          id: "3",
          image: img3,
          title: "Armani leather purse",
          catagory: "Bags",
          price: "10",
        },
        {
          id: "4",
          image: img4,
          title: "Armani purse",
          catagory: "Bags",
          price: "10",
        },
        {
          id: "5",
          image: img5,
          title: "Cys m3",
          catagory: "Bags",
          price: "10",
        },
        {
          id: "6",
          image: img6,
          title: "Givency purse",
          catagory: "Bags",
          price: "10",
        },
        {
          id: "7",
          image: img7,
          title: "Gucci mini purse.",
          catagory: "Bags",
          price: "10",
        },
        {
          id: "8",
          image: img8,
          title: "Gucci purse",
          catagory: "Bags",
          price: "10",
        },
    ]
  return (
    <div>
      <DashBoard/>
    <Grid container spacing={1}>
      {ProductCard.map((item) => (
        <Grid item md={3}>
          <Card key={item.id} sx={{ padding: "10px", width: "100%" }}>
            <Box>
              <Box sx={{ justifyContent: "center", alignItems: "center" }}>
                <img
                  width={200}
                  height={200}
                  src={item.image}
                  alt={item.title}
                />
              </Box>

              <Typography variant="body1"> {item.catagory}</Typography>
              <Typography variant="h5">
                {" "}
                {item.title.length > 24
                  ? `${item.title.slice(0, 24)}...`
                  : item.title}
              </Typography>
              {/* <Typography component="legend">Rating</Typography>
             <Rating name="read-only" value={3} readOnly /> */}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <Typography variant="body1">${item.price}</Typography>
              <Box>
                {/* <Link to={`ProductCards/${item.id}`}> */}
                {/* <Tooltip title="See Details" placement="top">
                   <Button size="small" variant="contained">
                     {" "}
                     <VisibilityIcon />
                   </Button>
                 </Tooltip> */}
                {/* </Link> */}
                <Button
                  size="small"
                  sx={{
                    backgroundColor: "#019376", // Custom green color
                    color: "#fff", // White text
                    textTransform: "none", // Disable uppercase
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#017d68", // Slightly darker green on hover
                    },
                  }}
                  startIcon={<AddIcon />}
                  //onClick={() => dispatch(addToCart())}
                >
                  Add
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
  )
}

export default BagsProducts