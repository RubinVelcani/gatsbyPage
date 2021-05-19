/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCBSmbazKRXa3XwPkkMLxGyHmBo1OOqy6g",
          authDomain: "embroid-e0008.firebaseapp.com",
          projectId: "embroid-e0008",
          storageBucket: "embroid-e0008.appspot.com",
          messagingSenderId: "432402837236",
          appId: "1:432402837236:web:9a415a7d7180a3b853f8a1"
        }
      }
    }
],
}
