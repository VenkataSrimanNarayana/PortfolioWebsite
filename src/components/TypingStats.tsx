"use client";
import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircularProgress from "@mui/material/CircularProgress";

export default function TypingStats({ url }: { url: string }) {
    const [typingStatData, setTypingStatData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setTypingStatData(data);
                setLoading(false);
            });
    }, []);

    if (isLoading) return <CircularProgress sx={{ color: "#461e18" }} />;
    if (!typingStatData) return <p>No profile data</p>;
    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                p={2}
            >
                <SpeedIcon style={{ fontSize: 64, color: "#1976D2" }} />
                <Typography variant="h6">Typing Speed</Typography>
                <Typography variant="h4" align="center">
                    {
                        typingStatData["data"]["personalBests"]["time"][
                            "30"
                        ][0]["wpm"]
                    }{" "}
                    WPM
                </Typography>
            </Box>

            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                p={2}
            >
                <CheckCircleIcon style={{ fontSize: 64, color: "#388E3C" }} />
                <Typography variant="h6">Accuracy</Typography>
                <Typography variant="h4" align="center">
                    {
                        typingStatData["data"]["personalBests"]["time"][
                            "30"
                        ][0]["acc"]
                    }
                    %
                </Typography>
            </Box>
        </>
    );
}
