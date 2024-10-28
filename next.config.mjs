/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = {
  target: 'serverless', // Ensures that the app is optimized for serverless deployment
};
export default nextConfig;
