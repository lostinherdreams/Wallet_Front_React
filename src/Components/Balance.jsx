import { useState } from "react";
import { Grid } from "@mui/material";
export function Balance() {
    const [count, setCount] = useState("100");
    const handaleBalanceChange = async (count) => {
        setCount(count);
    };
    return (
        <>
            <Grid
                item
                xs={12}
                fontWeight={"bold"}
                lineHeight={0.2}
                fontSize={30}
            >
                ${count}
            </Grid>
            <Grid item xs={12} lineHeight={0.2} fontSize={12}>
                موجودی حساب
            </Grid>
        </>
    );
}
