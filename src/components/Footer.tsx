"use client";
import Container from "@mui/material/Container";
import { Link, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Divider } from "@mui/material";

export default function Footer() {
    return (
        <>
            <Divider />
            <Container
                maxWidth={false}
                sx={{
                    textAlign: "center",
                    color: "#461e18",
                    paddingTop: "2rem",
                    PaddingBottom: "0.5rem",
                    backgroundColor: "#F8E2CF",
                }}
            >
                {/* Add My contact email and phone number */}
                <Link
                    sx={{
                        color: "inherit",
                        opacity: 0.8,
                        textDecoration: "none",
                        marginRight: "0.5rem",
                    }}
                    href="mailto:venkata.sriman.narayana.m@gmail.com"
                >
                    venkata.sriman.narayana.m@gmail.com
                </Link>
                <Typography sx={{ display: { xs: "none", md: "inline" } }}>
                    |
                </Typography>
                <Typography
                    sx={{ display: { xs: "block", md: "none" } }}
                ></Typography>
                <Link
                    sx={{
                        color: "inherit",
                        opacity: 0.8,
                        textDecoration: "none",
                        margin: "0.5rem",
                    }}
                    href="tel:+918499933349"
                >
                    8499933349
                </Link>
                <Container sx={{ marginTop: "1rem", display: "block" }}>
                    {/* Linkedin handle */}
                    <Link
                        sx={{ color: "inherit", opacity: 0.8 }}
                        href="https://www.linkedin.com/in/venkata-sriman-152335204"
                    >
                        <LinkedInIcon />
                    </Link>
                </Container>
                <Typography
                    color="#000"
                    fontSize="0.8rem"
                    sx={{ opacity: 0.6, marginTop: "2rem" }}
                >
                    © 2023 Venkata Sriman Narayana Malli
                </Typography>
            </Container>
        </>
    );
}
