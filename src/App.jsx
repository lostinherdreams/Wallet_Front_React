import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { AvatarProfile } from "./Components/Avatar";
import { Balance } from "./Components/Balance";
import { Shop } from "./Components/Icons/Shop";
import { Exchange } from "./Components/Icons/Exchange";
import { Send } from "./Components/Icons/Send";
import { Recive } from "./Components/Icons/Recive";
import { Card } from "./Components/CoinCard/Card";

import "./App.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";



function App() {
    return (
        <Box
            sx={{
                flexGrow: 1,
                border: "2px solid #d5d5d590",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor:"#f8f8f8", 
                overflow: "hidden",
                scale:"1.25"
            }}
        >
            <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="center"
                sx={{
                    minHeight: "100%",
                    margin: "0",
                    width: "100%",
                    maxWidth: "680.100px",
                }}
            >
                <Grid item xs={10}></Grid>
                <Grid item xs={2}>
                    <AvatarProfile />
                </Grid>
                <Balance />
                <Grid container item spacing={4} sx={{ marginTop: "10px" }}>
                    <Shop />
                    <Exchange />
                    <Send />
                    <Recive />
                </Grid>
                <Grid
                    container
                    item
                    sx={{ maxWidth: "656.100px", paddingLeft: "0 !important" }}
                >
                    <Card unit="USDT" tokenName="تتر" worth={1} rate={1} logo="src\assets\tether.png" />
                    <Card unit="BTC" tokenName="بیت کوین" worth={6739.99} rate={-1.55} logo="src\assets\bitcoin.png"/>

                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
