"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function Navbar({ pages }: { pages: Array<Array<string>> }) {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                color: "#000",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page[0]}
                                onClick={handleCloseNavMenu}
                                href={page[1]}
                                sx={{
                                    my: 2,
                                    color: "#461e18",
                                    display: "block",
                                }}
                            >
                                {page[0]}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
