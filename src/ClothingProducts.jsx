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
import img1 from "./Assets-clothing/2Go.webp";
import img2 from "./Assets-clothing/A.webp";
import img3 from "./Assets-clothing/Basic_hollow.webp";
import img4 from "./Assets-clothing/Champion.webp";
import img5 from "./Assets-clothing/Charming_red.webp";
import img6 from "./Assets-clothing/Cowl_Neck.webp";
import img7 from "./Assets-clothing/DOROTHY_PERKINS.webp";
import img8 from "./Assets-clothing/Ellesse_candreva_joggers_dress_blue.webp";
import img9 from "./Assets-clothing/Flounce_High.webp";
import img10 from "./Assets-clothing/FOREVER_21.webp";
import img11 from "./Assets-clothing/GOLDERS.webp";
import img12 from "./Assets-clothing/Hooded_Zips.webp";
import img13 from "./Assets-clothing/Invictus.webp";
import img14 from "./Assets-clothing/Lapel_Zips.webp";
import img15 from "./Assets-clothing/Loap_jerryk_mens_winter_city_jacket_red.webp";
import img16 from "./Assets-clothing/WHITE_INFINITY.webp";
import img17 from "./Assets-clothing/VERO_MODA.webp";
import img18 from "./Assets-clothing/Turn_Down.webp";
import img19 from "./Assets-clothing/roadster.webp";
import img20 from "./Assets-clothing/Plain_midi.webp";
import DashBoard from './DashBoard';

const ClothingProducts = () => {
     const ProductCard = [
        {
          id: "1",
          image: img1,
          title: "2Go",
          catagory: "Clothing",
          price: "10",
        },
        {
          id: "2",
          image: img2,
          title: "A",
          catagory: "Clothing",
          price: "10",
        },
        {
          id: "3",
          image: img3,
          title: "Basic_hollow",
          catagory: "Clothing",
          price: "10",
        },
        {
          id: "4",
          image: img4,
          title: "Champion",
          catagory: "Clothing",
          price: "10",
        },
        {
          id: "5",
          image: img5,
          title: "Charming_red",
          catagory: "Clothing",
          price: "10",
        },
        {
          id: "6",
          image: img6,
          title: "Cowl_Neck",
          catagory: "Clothing",
          price: "10",
        },
        {
          id: "7",
          image: img7,
          title: "DOROTHY_PERKINS",
          catagory: "Clothing",
          price: "10",
        },
        {
          id: "8",
          image: img8,
          title: "Ellesse_candreva_joggers_dress_blue",
          catagory: "Clothing",
          price: "10",
        },
        {
          id: "9",
          image: img9,
          title: "Flounce_High",
          catagory: "Clothing",
          price: "10",
        },
        {
          id: "10",
          image: img10,
          title: "FOREVER_21",
          catagory: "Clothing",
          price: "10",
        },
        {
          id: "11",
          image: img11,
          title: "GOLDERS",
          catagory: "Clothing",
          price: "10",
        },
        {
          id: "12",
          image: img12,
          title: "Hooded_Zips",
          catagory: "Clothing",
          price: "10",
        },
        {
          id: "13",
          image: img13,
          title: "Invictus",
          catagory: "Clothing",
          price: "10",
        },
        {
          id: "14",
          image: img14,
          title: "Lapel_Zips",
          catagory: "Clothing",
          price: "10",
        },
        {
          id: "15",
          image: img15,
          title: "Loap_jerryk_mens_winter_city_jacket_red",
          catagory: "Clothing",
          price: "10",
        },
        {
          id: "16",
          image: img16,
          title: "WHITE_INFINITY",
          catagory: "Clothing",
          price: "10",
        },
        {
          id: "17",
          image: img17,
          title: "VERO_MODA",
          catagory: "Clothing",
          price: "10",
        },
        {
          id: "18",
          image: img18,
          title: "Turn_Down",
          catagory: "Clothing",
          price: "10",
        },
        {
          id: "19",
          image: img19,
          title: "roadster",
          catagory: "Clothing",
          price: "10",
        },
        {
          id: "20",
          image: img20,
          title: "Plain_midi",
          catagory: "Clothing",
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

export default ClothingProducts