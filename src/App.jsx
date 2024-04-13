import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { AvatarProfile } from "./Components/Avatar";
import { Balance } from "./Components/Balance";
import { Shop, Exchange, Recive, Send } from "./Components/Icons/Icons";
import { Card } from "./Components/CoinCard/Card";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(
        window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    useEffect(() => {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e) => {
        setIsDarkMode(e.matches);
        document.body.style.backgroundColor = e.matches ? "#444444" : "#f5f0fc";
      };
      handleChange(mediaQuery)
      mediaQuery.addListener(handleChange);
  
      return () => {
        mediaQuery.removeListener(handleChange);
      };
    }, []);

    return (
        <Box
            className="container"
            sx={{ backgroundColor: isDarkMode ? "#717171" : "#f8f8f8" }}
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
                    <Card
                        unit="USDT"
                        tokenName="تتر"
                        worth={1}
                        rate={1}
                        logo="src/assets/tether.png"
                        mode = {isDarkMode}
                    />
                    <Card
                        unit="BTC"
                        tokenName="بیت کوین"
                        worth={679.99}
                        rate={-1.55}
                        logo="src/assets/bitcoin.png"
                        mode = {isDarkMode}

                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
