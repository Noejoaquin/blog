/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */


 module.exports = {
   siteMetadata: {
     title: 'Personal Blog',
     description: 'Personal blog on stuff that interests me'
   },
   plugins: [
     'gatsby-transformer-remark',
     {
       resolve: 'gatsby-source-filesystem',
       options: {
         name: `src`,
         path: `${__dirname}/src`,
       },
     },
   ],
 };
