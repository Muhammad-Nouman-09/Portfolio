import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Card,
  // Rating,
  Typography,
  Button,
  //LinearProgress,
  // Tooltip,
} from "@mui/material";
import img1 from "./Assets-bakery/Bread-1_jbikbk.webp";
import img2 from "./Assets-bakery/Bread-2_sfhewb.webp";
import img3 from "./Assets-bakery/Bread-3_nkkrpb.webp";
import img4 from "./Assets-bakery/Bread-6_xizpaj.webp";
import img5 from "./Assets-bakery/Bread-7_mv0yhz.webp";
import img6 from "./Assets-bakery/Coffee_Tea-1_rnxxwg.webp";
import img7 from "./Assets-bakery/Coffee_Tea-3_zlgz6x.webp";
import img8 from "./Assets-bakery/Coffee_Tea-5_ktc2il.webp";
import img9 from "./Assets-bakery/Coffee_Tea-6_wlaqgp.webp";
import img10 from "./Assets-bakery/Cookies-1_d8mfwp.webp";
import img11 from "./Assets-bakery/Cookies-2_osbjsh.webp";
import img12 from "./Assets-bakery/Cookies-3_x85w4w.webp";
import img13 from "./Assets-bakery/Cookies-5_oire6k.webp";
import img14 from "./Assets-bakery/Croissant-1_lrhnuh.webp";
import img15 from "./Assets-bakery/Croissant-2_p3q9it.webp";
import img16 from "./Assets-bakery/Croissant-5_sxjigi.webp";
import img17 from "./Assets-bakery/Juice-1_lx8xnf.webp";
import img18 from "./Assets-bakery/Juice2_lnhqsp.webp";
import img19 from "./Assets-bakery/Juice4_1_xt54si.webp";
import img21 from "./Assets-bakery/Juice2_lnhqsp.webp";
import img22 from "./Assets-bakery/Juice5_bz8od4.webp";
import img23 from "./Assets-bakery/Danish-1_gav1ka.webp";
import img24 from "./Assets-bakery/Danish-3_tkzkaz.webp";
import img25 from "./Assets-bakery/Danish-4_scewdb.webp";
import img26 from "./Assets-bakery/Danish-6_mklk6w.webp";
import img27 from "./Assets-bakery/Muffin-2_o6lhy8.webp";
import img28 from "./Assets-bakery/Muffin-3_xkmcoz.webp";
import img29 from "./Assets-bakery/Muffin-4_dv5jg6.webp";
import img30 from "./Assets-bakery/Muffin-6_uomrzu.webp";
import img31 from "./Assets-bakery/Pice_Cake-2_uhialp.webp";
import img32 from "./Assets-bakery/Pice_Cake-4_ptz2r5.webp";
import img33 from "./Assets-bakery/Pice_Cake-5_dcbcn7.webp";
// import img34 from "./Assets-bakery/Pita_Bread-3_uzisgc.webp";
import img35 from "./Assets-bakery/Pita_Bread-4_csc7se.webp";
import img36 from "./Assets-bakery/Pita_Bread-4_csc7se.webp";
// import img37 from "./Assets-bakery/Pita_Bread-6_whabjs.webp";
// import img38 from "./Assets-bakery/Pita_Bread-2_cczqay.webp";
import img39 from "./Assets-bakery/Round_Cake-8_rjbmjc.webp";
import img40 from "./Assets-bakery/Round_Cake-7_ygffyu.webp";
import DashBoard from "./DashBoard";

const BakeryProducts = () => {
  const ProductCard = [
    {
      id: "1",
      image: img1,
      title: "Bread",
      catagory: "Bread",
      price: "10",
    },
    
    {
      id: "2",
      image: img2,
      title: "Bread",
      catagory: "Bread",
      price: "10",
    },
    
    {
      id: "3",
      image: img3,
      title: "Bread",
      catagory: "Bread",
      price: "10",
    },
    
    {
      id: "4",
      image: img4,
      title: "Bread",
      catagory: "Bread",
      price: "10",
    },
    
    {
      id: "5",
      image: img5,
      title: "Bread",
      catagory: "Bread",
      price: "10",
    },
    {
      id: "6",
      image: img6,
      title: "Coffee_Tea",
      catagory: "Coffee_Tea",
      price: "10",
    },
    {
      id: "7",
      image: img7,
      title: "Coffee_Tea",
      catagory: "Coffee_Tea",
      price: "10",
    },
    {
      id: "8",
      image: img8,
      title: "Coffee_Tea",
      catagory: "Coffee_Tea",
      price: "10",
    },
    {
      id: "9",
      image: img9,
      title: "Coffee_Tea",
      catagory: "Coffee_Tea",
      price: "10",
    },
    {
      id: "10",
      image: img10,
      title: "Cookies",
      catagory: "Cookies",
      price: "10",
    },
    {
      id: "11",
      image: img11,
      title: "Cookies",
      catagory: "Cookies",
      price: "10",
    },
    {
      id: "12",
      image: img12,
      title: "Cookies",
      catagory: "Cookies",
      price: "10",
    },
    {
      id: "13",
      image: img13,
      title: "Cookies",
      catagory: "Cookies",
      price: "10",
    },
    {
      id: "14",
      image: img14,
      title: "Croissant",
      catagory: "Croissant",
      price: "10",
    },
    {
      id: "15",
      image: img15,
      title: "Croissant",
      catagory: "Croissant",
      price: "10",
    },
    {
      id: "16",
      image: img16,
      title: "Croissant",
      catagory: "Croissant",
      price: "10",
    },
    {
      id: "17",
      image: img17,
      title: "Juice",
      catagory: "Juice",
      price: "10",
    },
    {
      id: "18",
      image: img18,
      title: "Juice",
      catagory: "Juice",
      price: "10",
    },
    {
      id: "19",
      image: img19,
      title: "Juice",
      catagory: "Juice",
      price: "10",
    },
    {
      id: "21",
      image: img21,
      title: "Juice",
      catagory: "Juice",
      price: "10",
    },
    {
      id: "22",
      image: img22,
      title: "Juice",
      catagory: "Juice",
      price: "10",
    },
    {
      id: "23",
      image: img23,
      title: "Danish",
      catagory: "Danish",
      price: "10",
    },
    {
      id: "24",
      image: img24,
      title: "Danish",
      catagory: "Danish",
      price: "10",
    },
    {
      id: "25",
      image: img25,
      title: "Danish",
      catagory: "Danish",
      price: "10",
    },
    {
      id: "26",
      image: img26,
      title: "Danish",
      catagory: "Danish",
      price: "10",
    },
    {
      id: "27",
      image: img27,
      title: "Muffin",
      catagory: "Muffin",
      price: "10",
    },
    {
      id: "28",
      image: img28,
      title: "Muffin",
      catagory: "Muffin",
      price: "10",
    },
    {
      id: "29",
      image: img29,
      title: "Muffin",
      catagory: "Muffin",
      price: "10",
    },
    {
      id: "30",
      image: img30,
      title: "Muffin",
      catagory: "Muffin",
      price: "10",
    },
    {
      id: "31",
      image: img31,
      title: "Pice Cake",
      catagory: "Pice Cake",
      price: "10",
    },
    {
      id: "32",
      image: img32,
      title: "Pice Cake",
      catagory: "Pice Cake",
      price: "10",
    },
    {
      id: "33",
      image: img33,
      title: "Pice Cake",
      catagory: "Pice Cake",
      price: "10",
    },
    // {
    //   id: "34",
    //   image: img34,
    //   title: "Pita Bread",
    //   catagory: "Pita Bread",
    //   price: "10",
    // },
    {
      id: "35",
      image: img35,
      title: "Pita Bread",
      catagory: "Pita Bread",
      price: "10",
    },
    {
      id: "36",
      image: img36,
      title: "Pita Bread",
      catagory: "Pita Bread",
      price: "10",
    },
    // {
    //   id: "37",
    //   image: img37,
    //   title: "Pita Bread",
    //   catagory: "Pita Bread",
    //   price: "10",
    // },
    // {
    //   id: "38",
    //   image: img38,
    //   title: "Pita Bread",
    //   catagory: "Pita Bread",
    //   price: "10",
    // },
    {
      id: "39",
      image: img39,
      title: "Pita Bread",
      catagory: "Pita Bread",
      price: "10",
    },
    {
      id: "40",
      image: img40,
      title: "Pita Bread",
      catagory: "Pita Bread",
      price: "10",
    },
    
  ];
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
  );
};

export default BakeryProducts;
