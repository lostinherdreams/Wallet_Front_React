import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import { Grid, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { DownloadOutlined } from "@ant-design/icons";
import { Item } from "../Item";

export function Send() {
    return (
        <Grid item xs={3}>
            <IconButton
                aria-label="exchange"
                sx={{
                    bgcolor: "#fff",
                    borderRadius: "12px",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                    "&:focus": {
                        outline: "none",
                    },
                }}
            >
                <DownloadOutlined style={{ fontSize: 30 }}/>
            </IconButton>
            <br />
            <Grid fontSize={12} lineHeight={2.2}>
                وایز
            </Grid>
        </Grid>
    );
}
