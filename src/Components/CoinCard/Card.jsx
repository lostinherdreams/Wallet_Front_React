import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { CardAvatar } from "./CardAvatar";

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    boxShadow: "none",
    textAlign: "center",
}));

export function Card({ unit, tokenName, worth, rate, logo }) {
    const [count, setCount] = useState(0);
    const sign = rate >= 0 ? "+" : null;
    return (
        <Grid
            container
            spacing={3}
            bgcolor={"white"}
            sx={{
                borderRadius: "8px",
                margin: "10px",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                minHeight: "70px",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": {
                    backgroundColor: "#f0f0f0",
                },
            }}
        >
            <Grid item xs={3} sx={{ paddingTop: "0 !important" }}>
                <Stack spacing={2} direction="column" lineHeight={0.2}>
                    <Item>{count} USDT</Item>
                    <Item
                        sx={{
                            fontSize: "10px",
                            position: "relative",
                            left: "-18px",
                        }}
                    >
                        ${count * worth}
                    </Item>
                </Stack>
            </Grid>
            <Grid item xs={5} sx={{ paddingTop: "0 !important" }}></Grid>
            <Grid item xs={2} sx={{ paddingTop: "0 !important" }}>
                <Stack spacing={2} direction="column" lineHeight={0.2}>
                    <Item>{tokenName}</Item>
                    <Item
                        sx={{
                            fontSize: "10px",
                        }}
                    >
                        ${worth}
                        <span
                            style={{
                                color: rate >= 0 ? "#5eaf5e" : "#ff5f5f",overflow:"hidden"
                            }}
                        >
                            {' '}({sign}
                            {rate}%)
                        </span>
                    </Item>
                </Stack>
            </Grid>
            <Grid item xs={2} sx={{ paddingTop: "0 !important" }}>
                <CardAvatar logo={logo} />
            </Grid>
        </Grid>
    );
}
