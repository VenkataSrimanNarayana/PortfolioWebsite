"use client";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Brightness1Icon from "@mui/icons-material/Brightness1";

export default function CustomizedTimeline({
    content,
}: {
    content: Array<[string, React.ReactNode, string, Array<string>]>;
}) {
    return (
        <Timeline position="alternate">
            {content.map((item, index) => (
                <TimelineItem key={index}>
                    <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        {item[0]}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="success">{item[1]}</TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography
                            variant="h6"
                            fontSize="1rem"
                            component="span"
                            color="#461e18"
                        >
                            {item[2]}
                        </Typography>
                        {item[3].map((item, index) => (
                            <Typography fontSize="0.8rem" key={index}>
                                {item}
                            </Typography>
                        ))}
                    </TimelineContent>
                </TimelineItem>
            ))}
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="success">
                        <Brightness1Icon />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}></TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
