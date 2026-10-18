module.exports = {
  output: "standalone",
  async rewrites() {
    return [{ source: "/api/:path*", destination: "http://api:8000/:path*" }];
  },
};
