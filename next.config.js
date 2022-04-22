const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
  env: {
    REACT_APP_MAILCHIMP_KEY: '//joedaymusic.us7.list-manage.com/subscribe/post?u=589025a72c5787cb1bc1b7b16&amp;id=c7bc1f5c37'
  },
  assetPrefix: isProd ? '/joedaymusic/' : ''
}