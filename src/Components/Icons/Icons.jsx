import { Grid, IconButton } from "@mui/material";
import { SwapOutlined } from "@ant-design/icons";
import { ShopOutlined } from "@ant-design/icons";
import { UploadOutlined } from "@ant-design/icons";
import { DownloadOutlined } from "@ant-design/icons";

const IconWithText = ({ icon, text }) => (
    <Grid item xs={3}>
        <IconButton
            aria-label={text}
            sx={{
                bgcolor: "#fff",
                borderRadius: "12px",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                "&:focus": {
                    outline: "none",
                },
            }}
        >
            {icon}
        </IconButton>
        <br />
        <Grid fontSize={12} lineHeight={2.2}>
            {text}
        </Grid>
    </Grid>
);


export function Shop() {
    return (
        <IconWithText
            icon={<ShopOutlined style={{ fontSize: 30 }} />}
            text="فروشگاه"
        />
    );
}

export function Exchange() {
    return (
        <IconWithText
            icon={<SwapOutlined style={{ fontSize: 30 }} />}
            text="تبدیل"
        />
    );
}


export function Send() {
    return (
        <IconWithText
            icon={<DownloadOutlined style={{ fontSize: 30 }} />}
            text="واریز"
        />
    );
}

export function Recive() {
    return (
        <IconWithText
            icon={<UploadOutlined style={{ fontSize: 30 }} />}
            text="برداشت"
        />
    );
}

