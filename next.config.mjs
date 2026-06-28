/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: isGithubPages ? "export" : undefined,
  trailingSlash: isGithubPages,
  basePath: isGithubPages ? "/xiaodong" : "",
  assetPrefix: isGithubPages ? "/xiaodong/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
