import { useState } from "react";
import { Grid } from "@mui/material";

export function Balance() {
    const [count, setCount] = useState("100");

    const handleBalanceChange = (count) => {
        setCount(count);
    };

    return (
        <>
            <Grid
                item
                xs={12}
                sx={{
                    fontWeight: "bold",
                    lineHeight: 0.2,
                    fontSize: 30,
                }}
            >
                ${count}
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    lineHeight: 0.2,
                    fontSize: 12,
                }}
            >
                موجودی حساب
            </Grid>
        </>
    );
}
