import Avatar from "@mui/material/Avatar";
import { useState } from "react";

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
}
export function AvatarProfile() {
    const [avatarSrc, setAvatarSrc] = useState(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setAvatarSrc(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
    return (
        <>
            {avatarSrc ? (
                <Avatar src={avatarSrc} />
            ) : (
                <Avatar {...stringAvatar("Mahya Beheshti")} />
            )}
        </>
    );
}
