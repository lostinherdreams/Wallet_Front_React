import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { AvatarProfile } from "./Components/Avatar";
import { Balance } from "./Components/Balance";
import { Shop, Exchange, Recive, Send } from "./Components/Icons/Icons";
import { Card } from "./Components/CoinCard/Card";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
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
    handleChange(mediaQuery); // Set initial background color
    mediaQuery.addListener(handleChange);

    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      className="container"
      sx={{
        backgroundColor: isDarkMode ? "#717171" : "#f8f8f8",
        padding: matches ? "1rem" : "2rem",
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
          maxWidth: "960px", // Adjusted max-width for responsiveness
        }}
      >
        <Grid item xs={12} sm={10} md={8} lg={9} xl={10}>
          <AvatarProfile />
        </Grid>
        <Grid item xs={12} sm={10} md={8} lg={9} xl={10}>
          <Balance />
        </Grid>
        <Grid container item spacing={4} className="actions">
          <Grid item xs={6} sm={3}>
            <Shop />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Exchange />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Send />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Recive />
          </Grid>
        </Grid>
        <Grid container item spacing={3} className="cards">
          <Grid item xs={12} sm={6}>
            <Card
              unit="USDT"
              tokenName="تتر"
              worth={1}
              rate={1}
              logo="src/assets/tether.png"
              mode={isDarkMode}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card
              unit="BTC"
              tokenName="بیت کوین"
              worth={679.99}
              rate={-1.55}
              logo="src/assets/bitcoin.png"
              mode={isDarkMode}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
