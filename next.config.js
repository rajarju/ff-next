const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withTM = require('next-transpile-modules')([  
  '@adobe/react-spectrum',
  '@spectrum-icons/.*',
  '@react-spectrum/.*'
])
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withPlugins([withMDX, withCSS, withTM], {
  distDir: '../../dist/web-src-dev',
  pageExtensions: ['js', 'jsx', 'mdx'],
})
