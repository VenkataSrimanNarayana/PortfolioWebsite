"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Link from "@mui/material/Link";

interface Project {
    title: string;
    description: React.ReactNode;
    githubLink: string;
}

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <>
            <Card
                sx={{ padding: "1rem", backgroundColor: "#fff6f0" }}
                elevation={3}
            >
                <CardContent>
                    <Link
                        sx={{
                            color: "#461e18",
                            display: "block",
                            textDecoration: "none",
                        }}
                        href={project.githubLink}
                    >
                        <Typography variant="h4">{project.title}</Typography>
                    </Link>
                    <Typography>{project.description}</Typography>
                </CardContent>
            </Card>
        </>
    );
}
