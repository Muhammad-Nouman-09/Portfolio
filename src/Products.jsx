import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
//import { Link } from "react-router";
//import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
//import { addToCart } from "./Slices/addCart/addCartSlice";
import {
    Box,
    Card,
    Rating,
    Typography,
    Button,
    //LinearProgress,
    Tooltip,
  } from "@mui/material";
  import img1 from "./Assets/grocery.webp"
  import img2 from "./Assets/Dates.webp"
  import img3 from "./Assets/Mangoes.webp"
  import img4 from "./Assets/MiniPeppers.webp"
  import img5 from "./Assets/blueberries.webp"
  import img6 from "./Assets/BabySpinach.webp"
  import img7 from "./Assets/BrusselsSprouts.webp"
  import img8 from "./Assets/CelerySticks.webp"
  import img9 from "./Assets/Corn.webp"
  import img10 from "./Assets/Cucumber.webp"
  import img11 from "./Assets/fish and meat/beef_xkxhnb.webp"
  import img12 from "./Assets/fish and meat/chicken_brest_ribcxo.webp"
  import img13 from "./Assets/fish and meat/chicken_thigh_yrdfwh.webp"
  import img14 from "./Assets/fish and meat/codfillet_u0mti1.webp"
  import img15 from "./Assets/fish and meat/halibut_jaz7ju.webp"
  import img16 from "./Assets/fish and meat/SignatureSalmon_fstp4m.webp"
  import img17 from "./Assets/fish and meat/sliced_turkey_breast_szb8jg.webp"
  import img18 from "./Assets/fish and meat/steak_okxpjo.webp"
  import img19 from "./Assets/fish and meat/swordfish_smniuv.webp"
  import img20 from "./Assets/fish and meat/TilapiaFillet_a2urhk.webp"
  import img21 from "./Assets/Dairy/butter_barney.webp"
  import img22 from "./Assets/Dairy/butter_kirkland.webp"
  import img23 from "./Assets/Dairy/butter_nature's_tattva.webp"
  import img24 from "./Assets/Dairy/butter_nikki's.webp"
  import img25 from "./Assets/Dairy/butter_tru_nut.webp"
  import img26 from "./Assets/Dairy/butter_whole_earth.webp"
  import img27 from "./Assets/Dairy/khong_guan_orange_cream.webp"
  import img28 from "./Assets/Dairy/milk_arla_lacto_free.webp"
  import img29 from "./Assets/Dairy/milk_arla_low_fat1.webp"
  import img30 from "./Assets/Dairy/milk_cream_nammilk.webp"
  import img31 from "./Assets/beverage/7up_lemon_lime_355ml.webp"
  import img32 from "./Assets/beverage/ava_juice_Detox_Matcha.webp"
  import img33 from "./Assets/beverage/coke_diet_355ml.webp"
  import img34 from "./Assets/beverage/Fanta_orange_can_250ml.webp"
  import img35 from "./Assets/beverage/iceland_tropical_juice_drink.webp"
  import img36 from "./Assets/beverage/minute_maid_orange.webp"
  import img37 from "./Assets/beverage/mountain_dew_diet.webp"
  import img38 from "./Assets/breakfast/belmont_custard_cream.webp"
  import img39 from "./Assets/breakfast/boh_3in1_instant_tea_mix.webp"
  import img40 from "./Assets/breakfast/chings_mixvegsoup.webp"
  import img41 from "./Assets/breakfast/chivers_mixed_fruit_jam.webp"
  import img42 from "./Assets/breakfast/cintan_chicken.webp"
  import img43 from "./Assets/breakfast/crawford_digestives.webp"
  import img44 from "./Assets/breakfast/egg_cp.webp"
  import img45 from "./Assets/breakfast/egg_cavanagh.webp"
  import img46 from "./Assets/breakfast/Jammie_Dodgers.webp"
  import img47 from "./Assets/breakfast/india_gate_basmati_rice.webp"
  import img48 from "./Assets/breakfast/egg_freshlay_golden_yolks.webp"
  import img49 from "./Assets/breakfast/Farmhouse_Multigrain_Batch_loaf_purple_pack.webp"
  import img50 from "./Assets/breakfast/fibre1_crunchy_original.webp"
  import img51 from "./Assets/cooking/allegro_bbq_sauce.webp"
  import img52 from "./Assets/cooking/asain_zing_chili.webp"
  import img53 from "./Assets/cooking/clover_valley_sea_salt_grinder.webp"
  import img54 from "./Assets/cooking/clover_valley_sea_salt_grinder.webp"
  import img55 from "./Assets/cooking/dragon.webp"
  import img56 from "./Assets/cooking/felix_chili_sauce.webp"
  import img57 from "./Assets/cooking/kame_stir_fry.webp"
  import img58 from "./Assets/cooking/tropicana_apple.webp"
  import img59 from "./Assets/cooking/taco_bell_diablo_sauce.webp"
  import img60 from "./Assets/cooking/oil_clover_valley.webp"
  import img61 from "./Assets/health and beauty/attitude_night_bubble_bath.webp"
  import img62 from "./Assets/health and beauty/aveeno_baby_shampoo.webp"
  import img63 from "./Assets/health and beauty/aveeno_baby_shampoo.webp"
  import img64 from "./Assets/health and beauty/espa_men_dual_action_shave_mud.webp"
  import img65 from "./Assets/health and beauty/face_republic_Sun_gel.webp"
  import img66 from "./Assets/health and beauty/frei_ol_urea2in1.webp"
  import img67 from "./Assets/health and beauty/gnc_aloe_vera_moisturizing_cream.webp"
  import img68 from "./Assets/health and beauty/gum_oral_care_cleaning_kit.webp"
  import img69 from "./Assets/health and beauty/human_nature_shaving_cream.webp"
  import img70 from "./Assets/health and beauty/moisturizing_hair_bath_g.webp"
  import img71 from "./Assets/petcare/dog_food_black_hawk_adult_all_breeds_lamb&rice.webp"
  import img72 from "./Assets/petcare/grain_free.webp"
  import img73 from "./Assets/petcare/hills_science_diet.webp"
  import img74 from "./Assets/petcare/prescription_diet.webp"
  import img75 from "./Assets/petcare/pro_diet.webp"
  import img76 from "./Assets/snacks/cadbury_dairy_milk_crispello.webp"
  import img77 from "./Assets/snacks/lays-sour-cream.webp"
  import img78 from "./Assets/snacks/Ready-Salted-Crisps.webp"
  import img79 from "./Assets/snacks/lays-sour-cream.webp"
  import img80 from "./Assets/snacks/nims_apple_fruit.webp"
import DashBoard from './DashBoard';
import { addProducts } from './SliceFolder/AddCartSlice';

  
  


const Products = () => {
    const ProductCard =[
        {
            id : "1",
            image: img1,
            title: "Apple",
            catagory: "Fruits and Vegatables",
            price: "10"

        },
        {
            id : "2",
            image: img2,
            title: "Dates",
            catagory: "Fruits and Vegatables",
            price: "10"

        },
        {
            id : "3",
            image: img3,
            title: "Mangoes",
            catagory: "Fruits and Vegatables",
            price: "10"

        },
        {
            id : "4",
            image: img4,
            title: "Pepper",
            catagory: "Fruits and Vegatables",
            price: "10"

        },
        {
            id : "5",
            image: img5,
            title: "Blueberries",
            catagory: "Fruits and Vegatables",
            price: "10"

        },
        {
            id : "6",
            image: img6,
            title: "Spinach",
            catagory: "Fruits and Vegatables",
            price: "10"

        },
        {
            id : "7",
            image: img7,
            title: "BrusselsSprouts",
            catagory: "Fruits and Vegatables",
            price: "10"

        },
        {
            id : "8",
            image: img8,
            title: "CelerySticks",
            catagory: "Fruits and Vegatables",
            price: "10"

        },
        {
            id : "9",
            image: img9,
            title: "corn",
            catagory: "Fruits and Vegatables",
            price: "10"

        },
        {
            id : "10",
            image: img10,
            title: "Cucumber",
            catagory: "Fruits and Vegatables",
            price: "10"

        },
        {
            id : "11",
            image: img11,
            title: "beef",
            catagory: "Meat and Fish",
            price: "10"

        },
        {
            id : "12",
            image: img12,
            title: "Chicken brest",
            catagory: "Meat and Fish",
            price: "10"

        },
        {
            id : "13",
            image: img13,
            title: "Chicken thigh",
            catagory: "Meat and Fish",
            price: "10"

        },
        {
            id : "14",
            image: img14,
            title: "Codfillet",
            catagory: "Meat and Fish",
            price: "10"

        },
        {
            id : "15",
            image: img15,
            title: "Halibut",
            catagory: "Meat and Fish",
            price: "10"

        },
        {
            id : "16",
            image: img16,
            title: "SignatureSalmon",
            catagory: "Meat and Fish",
            price: "10"

        },
        {
            id : "17",
            image: img17,
            title: "Sliced turkey breast",
            catagory: "Meat and Fish",
            price: "10"

        },
        {
            id : "18",
            image: img18,
            title: "Steak",
            catagory: "Meat and Fish",
            price: "10"

        },
        {
            id : "19",
            image: img19,
            title: "Swordfish",
            catagory: "Meat and Fish",
            price: "10"

        },
        {
            id : "20",
            image: img20,
            title: "TilapiaFillet",
            catagory: "Meat and Fish",
            price: "10"

        },
        {
            id : "21",
            image: img21,
            title: "Butter barney",
            catagory: "Dairy",
            price: "10"

        },
        {
            id : "22",
            image: img22,
            title: "Butter kirkland",
            catagory: "Dairy",
            price: "10"

        },
        {
            id : "23",
            image: img23,
            title: "Butter nature's",
            catagory: "Dairy",
            price: "10"

        },
        {
            id : "24",
            image: img24,
            title: "Butter nikki's",
            catagory: "Dairy",
            price: "10"

        },
        {
            id : "25",
            image: img25,
            title: "Butter whole earthucumber",
            catagory: "Dairy",
            price: "10"

        },
        {
            id : "26",
            image: img26,
            title: "Khong guan orange cream",
            catagory: "Dairy",
            price: "10"

        },
        {
            id : "27",
            image: img27,
            title: "Khong guan orange cream",
            catagory: "Dairy",
            price: "10"

        },
        {
            id : "28",
            image: img28,
            title: "Milk arla lacto free",
            catagory: "Dairy",
            price: "10"

        },
        {
            id : "29",
            image: img29,
            title: "Milk arla low fat1",
            catagory: "Dairy",
            price: "10"

        },
        {
            id : "30",
            image: img30,
            title: "Milk cream nammilk",
            catagory: "Dairy",
            price: "10"

        },
        {
            id : "31",
            image: img31,
            title: "7up lemon lime 355ml",
            catagory: "Beverage",
            price: "10"

        },
        {
            id : "32",
            image: img32,
            title: "Ava juice Detox Matcha",
            catagory: "Beverage",
            price: "10"

        },
        {
            id : "33",
            image: img33,
            title: "Coke diet 355ml",
            catagory: "Beverage",
            price: "10"

        },
        {
            id : "34",
            image: img34,
            title: "Fanta orange can 250ml",
            catagory: "Beverage",
            price: "10"

        },
        {
            id : "35",
            image: img35,
            title: "Iceland tropical juice drink",
            catagory: "Beverage",
            price: "10"

        },
        {
            id : "36",
            image: img36,
            title: "Minute maid orange",
            catagory: "Beverage",
            price: "10"

        },
        {
            id : "37",
            image: img37,
            title: "Mountain dew diet",
            catagory: "Beverage",
            price: "10"

        },
        {
            id : "38",
            image: img38,
            title: "Belmont custard cream",
            catagory: "Breakfast",
            price: "10"

        },
        {
            id : "39",
            image: img39,
            title: "Boh 3in1 instant tea mix",
            catagory: "Breakfast",
            price: "10"

        },
        {
            id : "40",
            image: img40,
            title: "Chings mixvegsoup",
            catagory: "Breakfast",
            price: "10"

        },
        {
            id : "41",
            image: img41,
            title: "Chivers mixed fruit jam",
            catagory: "Breakfast",
            price: "10"

        },
        {
            id : "42",
            image: img42,
            title: "Cintan chicken",
            catagory: "Breakfast",
            price: "10"

        },
        {
            id : "43",
            image: img43,
            title: "Crawford digestives",
            catagory: "Breakfast",
            price: "10"

        },
        {
            id : "44",
            image: img44,
            title: "Egg cp",
            catagory: "Breakfast",
            price: "10"

        },
        {
            id : "45",
            image: img45,
            title: "Egg cavanagh",
            catagory: "Breakfast",
            price: "10"

        },
        {
            id : "46",
            image: img46,
            title: "Jammie Dodgers",
            catagory: "Breakfast",
            price: "10"

        },
        {
            id : "47",
            image: img47,
            title: "India gate basmati rice",
            catagory: "Breakfast",
            price: "10"

        },
        {
            id : "48",
            image: img48,
            title: "Egg freshlay golden yolks",
            catagory: "Breakfast",
            price: "10"

        },
        {
            id : "49",
            image: img49,
            title: "Farmhouse Multigrain Batch pack",
            catagory: "Breakfast",
            price: "10"

        },
        {
            id : "50",
            image: img50,
            title: "Fibre1 crunchy original.webp",
            catagory: "Breakfast",
            price: "10"

        },
        {
            id : "51",
            image: img51,
            title: "Allegro bbq sauce.webp",
            catagory: "Cooking",
            price: "10"

        },
        {
            id : "52",
            image: img52,
            title: "Asain zing chili",
            catagory: "Cooking",
            price: "10"

        },
        {
            id : "53",
            image: img53,
            title: "Clover valley sea salt grinder",
            catagory: "Cooking",
            price: "10"

        },
        {
            id : "54",
            image: img54,
            title: "Cover valley sea salt grinder",
            catagory: "Cooking",
            price: "10"

        },
        {
            id : "55",
            image: img55,
            title: "Cooking/dragon",
            catagory: "Cooking",
            price: "10"

        },
        {
            id : "56",
            image: img56,
            title: "Felix chili sauce",
            catagory: "Cooking",
            price: "10"

        },
        {
            id : "57",
            image: img58,
            title: "Cooking/kame stir fry",
            catagory: "Cooking",
            price: "10"

        },
        {
            id : "59",
            image: img59,
            title: "cooking/taco_bell_diablo_sauc",
            catagory: "Cooking",
            price: "10"

        },
        {
            id : "60",
            image: img60,
            title: "oil_clover_valley",
            catagory: "Cooking",
            price: "10"

        },
        {
            id : "61",
            image: img61,
            title: "attitude_night_bubble_bath",
            catagory: "Health and Beauty",
            price: "10"

        },
        {
            id : "62",
            image: img62,
            title: "aveeno_baby_shampoo",
            catagory: "Health and Beauty",
            price: "10"

        },
        {
            id : "63",
            image: img63,
            title: "aveeno_baby_shampoo",
            catagory: "Health and Beauty",
            price: "10"

        },
        {
            id : "64",
            image: img64,
            title: "espa_men_dual_action_shave_mud",
            catagory: "Health and Beauty",
            price: "10"

        },
        {
            id : "65",
            image: img65,
            title: "face_republic_Sun_gel",
            catagory: "Health and Beauty",
            price: "10"

        },
        {
            id : "66",
            image: img66,
            title: "frei_ol_urea2in1",
            catagory: "Health and Beauty",
            price: "10"

        },
        {
            id : "67",
            image: img67,
            title: "gnc_aloe_vera_moisturizing_cream",
            catagory: "Health and Beauty",
            price: "10"

        },
        {
            id : "68",
            image: img68,
            title: "gum_oral_care_cleaning_kit",
            catagory: "Health and Beauty",
            price: "10"

        },
        {
            id : "69",
            image: img69,
            title: "human_nature_shaving_cream",
            catagory: "Health and Beauty",
            price: "10"

        },
        {
            id : "70",
            image: img70,
            title: "moisturizing_hair_bath",
            catagory: "Health and Beauty",
            price: "10"

        },
        {
            id : "71",
            image: img71,
            title: "dog_food_black_hawk_adult_all_breeds",
            catagory: "Pet Care",
            price: "10"

        },
        {
            id : "72",
            image: img72,
            title: "grain_free.webp",
            catagory: "Pet Care",
            price: "10"

        },
        {
            id : "73",
            image: img73,
            title: "hills_science_diet",
            catagory: "Pet Care",
            price: "10"

        },
        {
            id : "74",
            image: img74,
            title: "prescription_diet",
            catagory: "Pet Care",
            price: "10"

        },
        {
            id : "75",
            image: img75,
            title: "pro_diet",
            catagory: "Pet Care",
            price: "10"

        },
        {
            id : "76",
            image: img76,
            title: "cadbury_dairy_milk_crispello",
            catagory: "Snacks",
            price: "10"

        },
        {
            id : "77",
            image: img77,
            title: "lays-sour-cream",
            catagory: "Snacks",
            price: "10"

        },
        {
            id : "78",
            image: img78,
            title: "Ready-Salted-Crisps",
            catagory: "Snacks",
            price: "10"

        },
        {
            id : "79",
            image: img79,
            title: "lays-sour-cream",
            catagory: "Snacks",
            price: "10"

        },
        {
            id : "80",
            image: img80,
            title: "nims_apple_fruit",
            catagory: "Snacks",
            price: "10"

        },
       
       
       
       
    ]
    const Dispatch = useDispatch();
  return (
    <div>
        {/* <DashBoard/> */}
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
                      onClick={() => Dispatch(addProducts(item))} 
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

export default Products