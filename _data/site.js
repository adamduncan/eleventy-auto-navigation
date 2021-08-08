const environment = process.env.ELEVENTY_ENV;
console.log('environment', environment)
const PROD_ENV = 'prod';
const prodUrl = 'https://pietropassarelli.com';
const devUrl = 'http://localhost:8080';
const baseUrl = environment === PROD_ENV ? prodUrl : devUrl;
const isProd = environment === PROD_ENV;

// const folder = {
//   assets: 'assets',
// };

// const dir = {
//   img: `/${folder.assets}/img/`,
// }


module.exports = {
  // site: {
    environment,
    isProd,
    // folder,
    // base: {
    //   site: baseUrl,
    //   img: `${baseUrl}${dir.img}`,
    // },
    tracking: {
      gtag: 'G-R6JQ09CW0P',
    },
    "title": "Photography",
    "tagline": "notes",
    "name": "Tips Tricks & Quick Fix",
    "description": "Pietro Passarelli's blog",
    "url": "https://www.pietropassarelli.com",
    baseUrl,
    "repo": "http://github.com/pietrop/pietrop.github.io",
    "comments": false,
    "author": {
      "name": "Pietro",
      "email": "pietro.passarelli@gmail.com"
    },
    "owner": {
      "name": "Pietro",
      "last_name": "Passarelli",
      "email": "pietro.passarelli@gmail.com",
      "twitter": "pietropassarell",
      "facebook": "pietro.passarelli",
      "github": "pietrop",
      "linkedin": "pietropassarelli",
      "instagram": "pietro.ps",
      "about": "ubiq/pietro.jpeg",
      "image": "/img/about/fahrul-razi-BR6lrzCPYPk-unsplash.jpeg"
    },
    "og_locale": "en_US",
    "categories": [
      "video",
      "tech",
      "ttqf",
      "blog"
    ],
    "placeholder_image": "/img/placeholder/clouds.jpeg",
// 
  // }
};