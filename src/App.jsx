import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { AvatarProfile } from "./Components/Avatar";
import { Balance } from "./Components/Balance";
import { Shop,Exchange,Recive,Send } from "./Components/Icons/Icons";
import { Card } from "./Components/CoinCard/Card";
import "./App.css";

function App() {
  return (
    <Box className="container">
      <Grid container spacing={3} justifyContent="center" alignItems="center"   sx={{
    minHeight: "100%",
    margin: "0",
    width: "100%",
    maxWidth: "680.100px", 
  }}>
        <Grid item xs={10} />
        <Grid item xs={2}>
          <AvatarProfile />
        </Grid>
        <Balance />
        <Grid container item spacing={4} className="actions">
          <Shop />
          <Exchange />
          <Send />
          <Recive />
        </Grid>
        <Grid container item className="cards">
          <Card unit="USDT" tokenName="تتر" worth={1} rate={1} logo="src/assets/tether.png" />
          <Card unit="BTC" tokenName="بیت کوین" worth={6739.99} rate={-1.55} logo="src/assets/bitcoin.png" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
