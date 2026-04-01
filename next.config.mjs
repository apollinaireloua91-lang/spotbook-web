/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    unoptimized: true,
  },
};

if (process.env.NODE_ENV === "development") {
  import("@cloudflare/next-on-pages/next-dev").then(({ setupDevPlatform }) => {
    setupDevPlatform();
  });
}

export default nextConfig;
