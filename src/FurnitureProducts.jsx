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
import img1 from "./Assets-furniture/Aarya.webp";
import img2 from "./Assets-furniture/Aftab.webp";
import img3 from "./Assets-furniture/Alana_single.webp";
import img4 from "./Assets-furniture/andes_deco.webp";
import img5 from "./Assets-furniture/andes_wide.webp";
import img6 from "./Assets-furniture/Antero_2Seater.webp";
import img7 from "./Assets-furniture/Arlo.webp";
import img8 from "./Assets-furniture/Ash.webp";
import img9 from "./Assets-furniture/Beech.webp";
import img10 from "./Assets-furniture/Bjorn.webp";
import img11 from "./Assets-furniture/Brothers.webp";
import img12 from "./Assets-furniture/Burcot_single.webp";
import img13 from "./Assets-furniture/Camelia.webp";
import img14 from "./Assets-furniture/Clovelly.webp";
import img15 from "./Assets-furniture/Yuxin.webp";
import img16 from "./Assets-furniture/White.webp";
import img17 from "./Assets-furniture/SINKUKU.webp";
import img18 from "./Assets-furniture/Oliver.webp";
import img19 from "./Assets-furniture/Oliver.webp";
import img20 from "./Assets-furniture/Minotti_thumb.webp";
import DashBoard from './DashBoard';

const FurnitureProducts = () => {
     const ProductCard = [
            {
              id: "1",
              image: img1,
              title: "Aarya",
              catagory: "Furniture",
              price: "10",
            },
            {
              id: "2",
              image: img2,
              title: "Aftab",
              catagory: "Furniture",
              price: "10",
            },
            {
              id: "3",
              image: img3,
              title: "Alana_single",
              catagory: "Furniture",
              price: "10",
            },
            {
              id: "4",
              image: img4,
              title: "andes_deco",
              catagory: "Furniture",
              price: "10",
            },
            {
              id: "5",
              image: img5,
              title: "andes_wide",
              catagory: "Furniture",
              price: "10",
            },
            {
              id: "6",
              image: img6,
              title: "Antero_2Seater",
              catagory: "Furniture",
              price: "10",
            },
            {
              id: "7",
              image: img7,
              title: "Arlo",
              catagory: "Furniture",
              price: "10",
            },
            {
              id: "8",
              image: img8,
              title: "2Go",
              catagory: "Furniture",
              price: "10",
            },
            {
              id: "9",
              image: img9,
              title: "Beech",
              catagory: "Furniture",
              price: "10",
            },
            {
              id: "10",
              image: img10,
              title: "Bjorn",
              catagory: "Furniture",
              price: "10",
            },
            {
              id: "11",
              image: img11,
              title: "Brothers",
              catagory: "Furniture",
              price: "10",
            },
            {
              id: "12",
              image: img12,
              title: "Burcot_single",
              catagory: "Furniture",
              price: "10",
            },
            {
              id: "13",
              image: img13,
              title: "Camelia",
              catagory: "Furniture",
              price: "10",
            },
            {
              id: "14",
              image: img14,
              title: "Clovelly",
              catagory: "Furniture",
              price: "10",
            },
            {
              id: "15",
              image: img15,
              title: "Yuxin",
              catagory: "Furniture",
              price: "10",
            },
            {
              id: "16",
              image: img16,
              title: "White",
              catagory: "Furniture",
              price: "10",
            },
            {
              id: "17",
              image: img17,
              title: "SINKUKU",
              catagory: "Furniture",
              price: "10",
            },
            {
              id: "18",
              image: img18,
              title: "Oliver",
              catagory: "Furniture",
              price: "10",
            },
            {
              id: "19",
              image: img19,
              title: "2Go",
              catagory: "Furniture",
              price: "10",
            },
            {
              id: "20",
              image: img20,
              title: "Minotti_thumb",
              catagory: "Furniture",
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

export default FurnitureProducts