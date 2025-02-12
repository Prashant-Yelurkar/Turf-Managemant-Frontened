/** @type {import('next').NextConfig} */
import { createProxyMiddleware } from "http-proxy-middleware";
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: `https://turf-managemant-backened.vercel.app/:path*`,
                // destination: `http://localhost:3002/:path*`,
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
                target: `https://turf-managemant-backened.vercel.app/`,
                // target: `http://localhost:3002/`,

                changeOrigin: true,
                pathRewrite: {
                    "^/api": "",
                },
            }),
        },
    ],
};


export default nextConfig;