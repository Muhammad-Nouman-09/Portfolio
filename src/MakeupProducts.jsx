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
import img1 from "./Assets-makeup/absolute_plus_Meat_Dental_Set_.webp";
import img2 from "./Assets-makeup/attitude_night_bubble_bath.webp";
import img3 from "./Assets-makeup/aveeno_baby_shampoo.webp";
import img4 from "./Assets-makeup/Bourjois.webp";
import img5 from "./Assets-makeup/CYO.webp";
import img6 from "./Assets-makeup/DIOR.webp";
import img7 from "./Assets-makeup/Duke_Cannon_SHAVE_CREAM.webp";
import img8 from "./Assets-makeup/eo_body_lotion.webp";
import img9 from "./Assets-makeup/espa_men_dual_action_shave_mud.webp";
import img10 from "./Assets-makeup/EXPERT_WEAR_EYE_SHADOW.webp";
import img11 from "./Assets-makeup/face_republic_Sun_gel.webp";
import img12 from "./Assets-makeup/Stila.webp";
import img13 from "./Assets-makeup/Spectrum.webp";
import img14 from "./Assets-makeup/Skinnydip.webp";
import img15 from "./Assets-makeup/nair_hair_remover.webp";
import DashBoard from './DashBoard';

const MakeupProducts = () => {
     const ProductCard = [
                {
                  id: "1",
                  image: img1,
                  title: "absolute_plus_Meat_Dental_Set",
                  catagory: "Make Up",
                  price: "10",
                },
                {
                  id: "2",
                  image: img2,
                  title: "attitude_night_bubble_bath",
                  catagory: "Make Up",
                  price: "10",
                },
                {
                  id: "3",
                  image: img3,
                  title: "aveeno_baby_shampoo.webp",
                  catagory: "Make Up",
                  price: "10",
                },
                {
                  id: "4",
                  image: img4,
                  title: "Bourjois.webp",
                  catagory: "Make Up",
                  price: "10",
                },
                {
                  id: "5",
                  image: img5,
                  title: "CYO.webp",
                  catagory: "Make Up",
                  price: "10",
                },
                {
                  id: "6",
                  image: img6,
                  title: "DIOR.webp",
                  catagory: "Make Up",
                  price: "10",
                },
                {
                  id: "7",
                  image: img7,
                  title: "Duke_Cannon_SHAVE_CREAM",
                  catagory: "Make Up",
                  price: "10",
                },
                {
                  id: "8",
                  image: img8,
                  title: "eo_body_lotion",
                  catagory: "Make Up",
                  price: "10",
                },
                {
                  id: "9",
                  image: img9,
                  title: "espa_men_dual_action_shave_mud",
                  catagory: "Make Up",
                  price: "10",
                },
                {
                  id: "10",
                  image: img10,
                  title: "EXPERT_WEAR_EYE_SHADOW",
                  catagory: "Make Up",
                  price: "10",
                },
                {
                  id: "11",
                  image: img11,
                  title: "face_republic_Sun_gel",
                  catagory: "Make Up",
                  price: "10",
                },
                {
                  id: "12",
                  image: img12,
                  title: "Stila",
                  catagory: "Make Up",
                  price: "10",
                },
                {
                  id: "13",
                  image: img13,
                  title: "Spectrum",
                  catagory: "Make Up",
                  price: "10",
                },
                {
                  id: "14",
                  image: img14,
                  title: "Skinnydip",
                  catagory: "Make Up",
                  price: "10",
                },
                {
                  id: "15",
                  image: img15,
                  title: "nair_hair_remover",
                  catagory: "Make Up",
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

export default MakeupProducts