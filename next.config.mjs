/** @type {import('next').NextConfig} */
import { createProxyMiddleware } from "http-proxy-middleware";
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: `https://turf-managemant-b-git-aac20e-prashant-erappa-yelurkars-projects.vercel.app/:path*`,
            },
        ];
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = { fs: false, module: false };
        }
        return config;
    },

    serverMiddleware: [
        {
            path: "/api",
            handler: createProxyMiddleware({
                target: `https://turf-managemant-b-git-aac20e-prashant-erappa-yelurkars-projects.vercel.app/`,

                changeOrigin: true,
                pathRewrite: {
                    "^/api": "",
                },
            }),
        },
    ],
};


export default nextConfig;