module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/properties/:path*',
        destination: 'https://alx-listing-app-deployed-hazel.vercel.app/api/properties/:path*'
      }
    ]
  }
}