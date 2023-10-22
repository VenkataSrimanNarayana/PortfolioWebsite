import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import List from "@/components/List";
import React from "react";
import Result from "@/components/Result";
import Container from "@mui/material/Container";

interface Achievement {
    title: React.ReactNode;
    description: React.ReactNode;
}

const achievementList: Array<Achievement> = [
    {
        title: (
            <Link
                href="https://iitgn.ac.in/students/scholarships/Erach-Meheroo-Mehta"
                sx={{
                    textDecoration: "none",
                    color: "#461e18",
                    padding: "0",
                    display: "block",
                }}
            >
                <Typography variant="h6">
                    Recipient of Erach and Meheroo Mehta Merit Scholarship
                </Typography>
            </Link>
        ),
        description: (
            <Typography variant="body1">
                The Erach and Mehroo Mehta Merit Scholarship, established in
                2019 at IIT Gandhinagar, is a financial aid opportunity for
                B.Tech students. This scholarship provides Rs. 2 lakh annually
                for four years, totaling Rs. 8 lakhs per student. I have been
                fortunate to receive this scholarship, which necessitates
                maintaining a strong academic performance (SPI of 8.5 or a
                minimum CPI of 8.00) for renewal.
            </Typography>
        ),
    },
    {
        title: (
            <Link
                href="https://iitgn.ac.in/students/deanslist/2022-23-S2"
                sx={{ textDecoration: "none", color: "#461e18", padding: "0" }}
            >
                <Typography variant="h6">Dean’s List Semester-VI</Typography>
            </Link>
        ),
        description: <Typography variant="body1"></Typography>,
    },
    {
        title: (
            <Link
                href="https://iitgn.ac.in/students/deanslist/2020-21-S2"
                sx={{ textDecoration: "none", color: "#461e18", padding: "0" }}
            >
                <Typography variant="h6">Dean’s List Semester-II</Typography>
            </Link>
        ),
        description: <Typography variant="body1"></Typography>,
    },
    {
        title: (
            <Typography variant="h6">
                AIR <Result>1272</Result> in JEE Advanced 2020
            </Typography>
        ),
        description: <Typography variant="body1"></Typography>,
    },
    {
        title: (
            <Typography variant="h6">
                Statewise rank of <Result>78</Result> in AP EAMCET 2020
            </Typography>
        ),
        description: <Typography variant="body1"></Typography>,
    },
    {
        title: (
            <Typography variant="h6">
                AIR <Result>2055</Result> in JEE Mains 2020
            </Typography>
        ),
        description: <Typography variant="body1"></Typography>,
    },
];

export default function AchievementsPage() {
    return (
        <>
            <Container
                maxWidth={false}
                sx={{ backgroundColor: "#fff6f0", minHeight: "100vh" }}
            >
                <List list={achievementList} />
            </Container>
        </>
    );
}
