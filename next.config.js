/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === "production";

const nextConfig = {
    basePath: prod ? "/PortfolioWebsite" : "",
    output: "export",
    distDir: "build",
    reactStrictMode: true,
    swcMinify: true,
    modularizeImports: {
        "@mui/icons-material": {
            transform: "@mui/icons-material/{{member}}",
        },
    },
};

module.exports = nextConfig;
