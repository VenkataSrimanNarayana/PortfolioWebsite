"use client";
import { Typography } from "@mui/material";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    ReferenceArea,
    Tooltip,
} from "recharts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const CustomTooltip = ({
    active,
    payload,
}: {
    active: boolean;
    payload: Array<any>;
}) => {
    if (active && payload && payload.length) {
        return (
            <>
                <Container>
                    <Card
                        variant="outlined"
                        sx={{
                            backdropFilter: "blur(10px)",
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                        }}
                    >
                        <CardContent>
                            <Typography
                                variant="h6"
                                marginBottom={0}
                                lineHeight={1}
                                display="block"
                            >
                                {payload[0].payload.contest}
                            </Typography>
                            <Typography
                                variant="caption"
                                color="#636363"
                                marginTop={0}
                                lineHeight={1}
                                fontSize="0.5em"
                                display="block"
                            >
                                {new Date(
                                    payload[0].payload.time * 1000
                                ).toLocaleDateString(undefined, {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })}
                            </Typography>
                            <Typography display="block" variant="body2">
                                Rating:
                                <span
                                    style={{
                                        fontWeight: "bold",
                                    }}
                                >
                                    {payload[0].payload.rating + "   "}
                                </span>
                                (
                                <span
                                    style={{
                                        color:
                                            payload[0].payload.inc > 0
                                                ? "green"
                                                : "red",
                                    }}
                                >
                                    {(payload[0].payload.inc > 0 ? "+" : "") +
                                        payload[0].payload.inc}
                                </span>
                                )
                            </Typography>

                            <Typography display="block" variant="body2">
                                Rank:
                                <span
                                    style={{
                                        fontWeight: "bold",
                                    }}
                                >
                                    {payload[0].payload.rank}
                                </span>
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
            </>
        );
    }

    return null;
};

const formatXAxisTick = (value: number) => {
    // Custom formatting logic here, for example, capitalizing the first letter
    return new Date(value * 1000).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
    });
};

export default function CodeforcesRatings({ url }: { url: string }) {
    const [data, setData] = useState<Array<any>>([]);
    const [isLoading, setLoading] = useState(true);
    const [tooltipData, setTooltipData] = useState(false);
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.result);
                setLoading(false);
            });
    }, []);

    if (isLoading) return <CircularProgress sx={{ color: "#461e18" }} />;
    if (!data) return <p>No profile data</p>;
    console.log(data);

    var formattedData = [];
    // Converting the time to a readable format
    for (let i = 0; i < data.length; i++) {
        formattedData.push({
            time: data[i].ratingUpdateTimeSeconds,
            rank: data[i].rank,
            rating: data[i].newRating,
            contest: data[i].contestName,
            inc: data[i].newRating - data[i].oldRating,
        });
    }

    const handleDataPointClick = () => {
        setTooltipData(!tooltipData);
    };
    return (
        <>
            <ResponsiveContainer height={400} width="100%" minWidth={500}>
                <LineChart data={formattedData}>
                    <ReferenceArea
                        y1={0}
                        y2={2000}
                        stroke="#000"
                        strokeOpacity={1}
                        strokeWidth={2}
                    />
                    <ReferenceArea
                        y1={0}
                        y2={1200}
                        stroke="#000"
                        strokeOpacity={0.1}
                        fill="#cccccc"
                        fillOpacity={1}
                    />
                    <ReferenceArea
                        y1={1200}
                        y2={1400}
                        stroke="#000"
                        strokeOpacity={0.1}
                        fill="#77ff77"
                        fillOpacity={1}
                    />
                    <ReferenceArea
                        y1={1400}
                        y2={1600}
                        stroke="#000"
                        strokeOpacity={0.1}
                        fill="#77ddbb"
                        fillOpacity={1}
                    />
                    <ReferenceArea
                        y1={1600}
                        y2={1900}
                        stroke="#000"
                        strokeOpacity={0.1}
                        fill="#aaaaff"
                        fillOpacity={1}
                    />
                    <ReferenceArea
                        y1={1900}
                        stroke="#000"
                        strokeOpacity={0.1}
                        fill="#ff88ff"
                        fillOpacity={1}
                    />
                    <CartesianGrid
                        horizontal={false}
                        stroke="#000"
                        strokeOpacity={0.1}
                    />
                    <XAxis
                        dataKey="time"
                        type="number"
                        domain={["dataMin", "dataMax"]}
                        tickFormatter={formatXAxisTick}
                        tickSize={0}
                        tickCount={7}
                        interval={"equidistantPreserveStart"}
                        axisLine={false}
                        tickMargin={10}
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "0.8rem",
                        }}
                    />
                    <YAxis
                        domain={[0, 2000]}
                        ticks={[1200, 1400, 1600, 1900]}
                        tickSize={0}
                        axisLine={false}
                        tickMargin={10}
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "0.8rem",
                        }}
                    />
                    <Tooltip
                        content={<CustomTooltip active={false} payload={[]} />}
                        cursor={false}
                        isAnimationActive={false}
                    />
                    <Line
                        type="linear"
                        dataKey="rating"
                        stroke="#edc240"
                        strokeWidth={2}
                        onClick={handleDataPointClick}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
