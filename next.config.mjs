/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsHmrCache: false,
        // defaults to true
    },

    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "djbyqyggzfbjyfkjaega.supabase.co",
            pathname: "/storage/v1/object/public/car-images/**",
        }, ],
    },

    async headers() {
        return [{
            source: "/embed",
            headers: [{
                key: "Content-Security-Policy",
                value: "frame-src 'self' https://roadsidecoder.created.app;",
            }, ],
        }, ];
    },
};

export default nextConfig;