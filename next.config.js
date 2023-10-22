/** @type {import('next').NextConfig} */
const nextConfig = {
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
